---
title: "[TEMPLATE] Quick Note Example - Complete Reference"
date: 2026-02-22T00:00:00Z
type: note
duration: 2min
---

<!--
COMPLETE NOTE TEMPLATE
======================
Notes are brief, focused posts appearing on /notes page.
The [TEMPLATE] in title triggers filtering to hide it from listings.

FRONTMATTER FIELDS:
- title: Note title (required) - Include [TEMPLATE] to hide
- date: Date in ISO 8601 format (required)
- type: "note" (required - tells system this is a note, not a blog post)
- duration: Usually omitted or "2min" (notes are quick reads)
- description: Optional (rarely needed for notes)

WHEN TO USE NOTES VS BLOGS:
- Note: Quick tip, code snippet, reference (< 3 min read)
- Blog: Deep dive, story, tutorial (5+ min read)

FILTERING: Automatically hidden by ListPosts.vue filter
-->

## Types of Notes

Notes work best for these purposes:

### Quick Tips & Tricks

A fast way to share a useful technique or shortcut you discovered.

**Example:** Import multiple modules in one line using destructuring.

### Code Snippets

Reusable code patterns you want to remember or share.

```javascript
// Common pattern: Object destructuring with defaults
const { name = 'Anonymous', age = 18 } = user || {}
console.log(name, age)
```

```typescript
// TypeScript: Partial type utility
type UpdateUserDTO = Partial<User>

function updateUser(id: string, data: UpdateUserDTO) {
  // Update only the fields provided
  return api.patch(`/users/${id}`, data)
}
```

### Technical Reference

Quick lookup for syntax or common patterns.

```python
# Python list comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Nested
matrix = [[j for j in range(3)] for i in range(3)]

```

### Interesting Findings

Document something cool you discovered.

**CSS Benefit:** Using `aspect-ratio` for responsive media without height hacks.

```css
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
}

.video-container iframe {
  width: 100%;
  height: 100%;
}
```

### Terminal Commands

Quick reference for useful CLI commands.

```bash
# Find all .txt files and delete them
find . -type f -name "*.txt" -delete

# Count lines in all JavaScript files
find . -type f -name "*.js" | xargs wc -l

# Rename multiple files using pattern
for file in *.png; do mv "$file" "image_$(date +%s).png"; done
```

---

## Note Structure Best Practices

### Title

- Keep it short and descriptive
- Start with action verb when possible

- Examples:
  - "Understanding CSS Grid"
  - "Optimize JavaScript Loops"
  - "Vue 3 Composition API Patterns"

### Content

- 1-3 focused paragraphs
- One main code example or tip
- Optional: supplementary examples
- 150-400 words total

### Format

```
[Optional Intro Sentence]

[Main Point/Code/Example]

[Explanation if needed]
```

---

## Examples of Good Notes

### Example 1: Quick Tip

**Title:** "Using Optional Chaining in JavaScript"

Optional chaining (`?.`) safely accesses nested properties:

```javascript
// Old way - risky!

const city = user.address.city // Error if address is null

// New way - safe!
const safeCity = user?.address?.city // undefined if address is null
```

---

### Example 2: Reference

**Title:** "Git Stash Commands"

Quick reference for Git stash operations:

```bash

git stash                    # Save current changes
git stash list              # View all stashes
git stash pop               # Apply and remove latest
git stash apply stash@{0}   # Apply without removing
git stash drop stash@{0}    # Delete specific stash
```

---

### Example 3: Pattern

**Title:** "React Custom Hook Pattern"

Common pattern for creating reusable React hooks:

```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  const setStoredValue = (val: T) => {
    setValue(val)
    localStorage.setItem(key, JSON.stringify(val))
  }

  return [value, setStoredValue] as const
}
```

---

## Features You Can Use

### Markdown Basics

- **Bold** and _italic_
- `Inline code`
- [Links](/posts)
- Lists and nested lists
- > Blockquo
  > tes

### Code Blocks

Any language:

```python
print("Python")

```

```ruby
puts "Ruby"
```

### HTML/V'e'

Limited Vue components work (keep notes focused).

---

## Publishing a Note

1. **Copy this file:**

   ```bash
   cp [TEMPLATE]-note-example.md my-quick-tip.md
   ```

2. **Update frontmatter:**

   ```yaml
   title: 'Your Note Title (no [TEMPLATE])'
   date: 2026-02-22T10:30:00Z
   type: note
   ```

3. **Write content:** Replace this template

4. **Deploy:** Commit and push

5. **Verify:** Check `/notes` page

---

## Why Write Notes?

✅ **Quick to write** - 10-20 minutes per note
✅ **Quick to read** - Scannable in 2-3 minutes
✅ **Useful reference** - Archive of useful patterns
✅ **SEO friendly** - Drive long-tail search traffic
✅ **Community value** - Help others with quick solutions

---

## Note Title Ideas

Looking for note ideas? Consider:

- "X Useful Tips" - List format
- "Understanding X" - Educational
- "X Pattern in Y" - Code patterns
- "Quick Reference: X" - Technical reference
- "Today I Learned: X" - Discovery logs
- "Debugging X Issue" - Problem solutions

---

**Happy documenting!** 📝
