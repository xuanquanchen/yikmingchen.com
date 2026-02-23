#!/usr/bin/env node

/**
 * Auto-organize photos script
 *
 * Usage:
 *   node scripts/organize-photos.js
 *   npm run organize-photos
 *
 * This script:
 * 1. Scans /photos directory for JPG/PNG files without proper naming
 * 2. Reads EXIF metadata to get photo capture time
 * 3. Renames photos to: p-YYYY-MM-DD-HH-MM-SS-000-N.jpg format
 * 4. Generates corresponding .json metadata files
 * 5. Handles duplicate timestamps by adding sequence numbers
 */

import fs from 'node:fs'
import path from 'node:path'
import ExifReader from 'exifreader'

const PHOTOS_DIR = path.resolve('photos')
const TIMESTAMP_REGEX = /^p-\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-\d{3}-\d+\.(?:jpg|png)$/i

/**
 * @typedef {object} PhotoInfo
 * @property {string} originalName Original file name.
 * @property {string | null} timestamp Formatted timestamp string.
 * @property {Date | null} datetime Parsed capture time.
 * @property {number} sequence Sequence for duplicates.
 */

/**
 * Extract EXIF datetime from image
 */
/**
 * @param {string} filePath
 * @returns {Date | null} Parsed capture time, if available.
 */
function extractExifDateTime(filePath) {
  try {
    const data = fs.readFileSync(filePath)
    const tags = ExifReader.load(data)

    // Try DateTime Original (most reliable)
    if (tags.DateTimeOriginal?.description) {
      return parseExifDate(tags.DateTimeOriginal.description)
    }

    // Fallback: Try DateTime
    if (tags.DateTime?.description) {
      return parseExifDate(tags.DateTime.description)
    }

    return null
  }
  catch (error) {
    console.warn(`⚠️  Could not read EXIF from ${path.basename(filePath)}: ${error.message}`)
    return null
  }
}

/**
 * Parse EXIF datetime string (format: "2025:04:04 06:04:06" or "2025-04-04 06:04:06")
 */
/**
 * @param {string} dateStr
 * @returns {Date | null} Parsed date or null.
 */
function parseExifDate(dateStr) {
  try {
    const cleaned = dateStr.replace(/:/g, '-').trim()
    const [datePart, timePart] = cleaned.split(' ')

    if (!datePart || !timePart)
      return null

    const [year, month, day] = datePart.split('-').map(Number)
    const [hour, minute, second] = timePart.split(':').map(Number)

    if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day))
      return null

    return new Date(year, month - 1, day, hour, minute, second)
  }
  catch {
    return null
  }
}

/**
 * Format date to timestamp string
 */
/**
 * @param {Date} date
 * @returns {string} Timestamp formatted as YYYY-MM-DD-HH-MM-SS.
 */
function dateToTimestamp(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day}-${hour}-${minute}-${second}`
}

/**
 * Get files that need organizing
 */
/**
 * @returns {PhotoInfo[]} Unorganized photo entries.
 */
function getUnorganizedPhotos() {
  const files = fs.readdirSync(PHOTOS_DIR)
  /** @type {PhotoInfo[]} */
  const photos = []

  for (const file of files) {
    if (!/\.(?:jpg|png)$/i.test(file))
      continue
    if (TIMESTAMP_REGEX.test(file))
      continue // Already organized

    const filePath = path.join(PHOTOS_DIR, file)
    const stat = fs.statSync(filePath)

    if (!stat.isFile())
      continue

    // Try to get datetime from EXIF or use file modification time
    let datetime = extractExifDateTime(filePath)

    if (!datetime) {
      console.warn(`⚠️  No EXIF data for ${file}, using file mtime`)
      datetime = new Date(stat.mtimeMs)
    }

    photos.push({
      originalName: file,
      timestamp: dateToTimestamp(datetime),
      datetime,
      sequence: 0,
    })
  }

  // Sort by datetime
  photos.sort((a, b) => (a.datetime || new Date(0)).getTime() - (b.datetime || new Date(0)).getTime())

  // Handle duplicate timestamps by assigning sequence numbers
  /** @type {Record<string, number>} */
  const timestampCount = {}
  for (const photo of photos) {
    timestampCount[photo.timestamp] = (timestampCount[photo.timestamp] || 0) + 1
    photo.sequence = timestampCount[photo.timestamp]
  }

  return photos
}

/**
 * Generate JSON metadata file
 */
/**
 * @param {string} originalName
 * @returns {string} JSON metadata string.
 */
function generateJsonMetadata(originalName) {
  const nameWithoutExt = path.parse(originalName).name
  return JSON.stringify(
    {
      text: `Photo from ${nameWithoutExt}`,
      lang: 'en',
      // blurhash can be generated later if needed
    },
    null,
    2,
  )
}

/**
 * Rename photo and create JSON metadata
 */
/**
 * @param {PhotoInfo} photo
 * @returns {boolean} True if the photo was processed.
 */
function renamePhotoAndCreateJSON(photo) {
  const oldPath = path.join(PHOTOS_DIR, photo.originalName)
  const ext = path.extname(photo.originalName)
  const newName = `p-${photo.timestamp}-000-${photo.sequence}${ext}`
  const newPath = path.join(PHOTOS_DIR, newName)
  const jsonName = `p-${photo.timestamp}-000-${photo.sequence}.json`
  const jsonPath = path.join(PHOTOS_DIR, jsonName)

  try {
    // Check if new file already exists
    if (fs.existsSync(newPath)) {
      console.warn(`⚠️  ${newName} already exists, skipping`)
      return false
    }

    // Rename photo
    fs.renameSync(oldPath, newPath)
    console.log(`✅ Renamed: ${photo.originalName} → ${newName}`)

    // Create JSON metadata (only if doesn't exist)
    if (!fs.existsSync(jsonPath)) {
      fs.writeFileSync(jsonPath, generateJsonMetadata(photo.originalName), 'utf-8')
      console.log(`✅ Created: ${jsonName}`)
    }

    return true
  }
  catch (error) {
    console.error(`❌ Error processing ${photo.originalName}:`, error.message)
    return false
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Scanning photos directory...\n')

  if (!fs.existsSync(PHOTOS_DIR)) {
    console.error(`❌ Directory not found: ${PHOTOS_DIR}`)
    process.exit(1)
  }

  const photos = getUnorganizedPhotos()

  if (photos.length === 0) {
    console.log('✨ All photos are already organized!')
    return
  }

  console.log(`Found ${photos.length} unorganized photo(s):\n`)
  for (const photo of photos) {
    console.log(`  • ${photo.originalName}`)
    console.log(`    └─ Capture time: ${photo.datetime?.toLocaleString()}`)
    console.log(`    └─ New name: p-${photo.timestamp}-000-${photo.sequence}.jpg\n`)
  }

  console.log('🚀 Processing photos...\n')

  let successCount = 0
  for (const photo of photos) {
    if (renamePhotoAndCreateJSON(photo)) {
      successCount++
    }
  }

  console.log(`\n✅ Done! Successfully organized ${successCount}/${photos.length} photos`)
}

main().catch((error) => {
  console.error('❌ Error:', error)
  process.exit(1)
})
