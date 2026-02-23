# 📸 Auto-Organize Photos Guide

自动化照片组织脚本 - 从乱序照片自动生成标准命名和元数据

## 🎯 功能

- ✅ 扫描 `/photos` 目录中**未组织的照片**（JPG/PNG）
- ✅ 从照片的 **EXIF 元数据**中读取拍摄时间
- ✅ 自动重命名为标准格式：`p-YYYY-MM-DD-HH-MM-SS-000-N.jpg`
- ✅ 自动生成对应的 `.json` 元数据文件
- ✅ 处理**相同时间戳**的多张照片（自动添加序列号）
- ✅ 保留已组织的照片不动

## 🚀 使用方法

### 方式 1：NPM 命令

```bash
npm run organize-photos
```

### 方式 2：直接运行

```bash
node scripts/organize-photos.js
```

## 📋 文件名格式说明

生成的文件 名：`p-                      YYYY-            MM-DD-HH-MM-SS-000-N.jpg`

---

| 部分                | 含 义                      | 示例         |
| ------------------- | -------------------------- | ------------ |
| `p-`                | 照片标记前缀               | `p-`         |
| `YYYY    -   MM-DD` | 拍摄日期                   | `2025-04-04` |
| `HH    -     MM-SS` | 拍摄时间（24小时制）       | `06-04-06`   |
| `000`               | 毫秒（预留位置，暂未使用） | `000`        |

| `N`
| 序列号（相同时间多张照片） | `1`, `2`, `3`... |

**示例：**

```
p-2025-04-04-06-04-06-000-1.jpg     ← 第一张
p-2025-04-04-06-04-06-000-2.jpg     ← 同时刻第二张
p-2025-04-06-07-38-22-000-1.jpg     ← 不同时刻
```

## 📝 生成的 JSON 元数据

脚本自动为每张照片生成对应的 `.json` 文件：

```json
{
  "text": "Photo from original_filename",
  "lang": "en"
}
```

**你可以编辑这个文件来添加：**

- `text`: 照片描述/说明文字
- `lang`: 语言（en, zh, ja 等）
- `blurhash`: 模糊哈希（用于加载占位符）

### 添加 Blurhash（可选）

模糊哈希让照片加载时显示模糊占位符。可以使用在线工具生成：

1. 访问 https://blurha.sh
2. 上传照片
3. 复制哈希值到 JSON：

```json
{
  "text": "Beautiful sunset photo",
  "lang": "en",
  "blurhash": "UeKUpV4m8^%Meyn$RjWB6tzVIVfQ"
}
```

## 🔍 工作原理

### 1. EXIF 读取

脚本从照片的 EXIF 元数据中查找：

- `DateTimeOriginal` - 原始拍摄时间（优先使用）
- `DateTime` - 备选时间标签

### 2. 时间戳生

成

将 EXIF 时间转换为 `YYYY-MM-DD-HH-MM-SS` 格式

### 3. 重复处理

- 如果多张照片时间戳相同，自动添加序列号
- 例：`000-1`, `000-2`, `000-3`

### 4. 文件处理

- 重命名照片文
  件
- 创建对应的 J
  SON 元数据文件
- **已组织的照片不会被修改**

## ⚠️ 注意事项

### 前提条件

- 照片必须包含有效的 EXIF 元数据
- 如果照片没有 EXIF，脚本会使用文件的**修改时间**作为备选

### 损坏恢复

脚本在重命名前会：

1. 检查新文件名是否已存在
2. 如果存在则跳过，不覆盖
3. 你的原始照片不会被删除

### 运行多次安全

- 已组织的照片（匹配 `p-YYYY-MM-DD-*` 格式）会被自动跳过
- 可以安全地多次运行脚本

## 📊 运行示例

```bash
$ npm run organize-photos

🔍 Scanning photos directory...

Found 3 unorganized photo(s):

  • IMG_001.jpg
    └─ Capture time: 4/4/2025, 6:04:06 AM
    └─ New name: p-2025-04-04-06-04-06-000-1.jpg

  • IMG_002.jpg
    └─ Capture time: 4/4/2025, 6:04:06 AM
    └─ New name: p-2025-04-04-06-04-06-000-2.jpg

  • trip_photo.png
    └─ Capture time: 4/6/2025, 7:38:22 AM
    └─ New name: p-2025-04-06-07-38-22-000-1.png

🚀 Processing phot
os...

✅ Renamed: IMG_001.jpg → p-2025-04-04-06-04-06-000-1.jpg
✅ Created: p-2025-04
-04-06-04-06-000-1.json
✅ Renamed: IMG_002.jpg → p-2025-04-04-06-04-06-000-2.jpg

✅ Created: p-2025-04-04-06-04-06-000-2.json
✅ Renamed: trip_photo.png → p-2025-04-06-07-38-22-000-1.png
✅ Created: p-2025-04-06-07-38-22-000-1.json

✅ Done! Successfully organized 3/3 photos
```

## 🛠️ 常见问题

### Q: 脚本找不到照片怎么办？

A: 确保照片在 `/photos` 目录中，
并且是 `.jpg`, `.JPG`, `.png`, 或 `.PNG` 格式

### Q: EXIF 信息丢失怎么办？

A: 脚本会自动使用文件的修改时间作为备选，你也可以：

1. 手动编辑生成的文件名
2. 使用 EXIF 工具（如 ExifTool）添加时间戳

```bash
# 使用 ExifTool 添加时间戳（需要先安装）
exiftool -DateTimeOriginal="2025:04:04 06:04:06" photo.jpg
```

### Q: 可以自定义文件名格式吗？

A: 当然可以！编辑 `scripts/organize-photos.js` 中的 `dateToTimestamp` 函数

### Q: 如何编辑生成的 JSON 文件？

A: 直接编辑 `/photos/p-YYYY-MM-DD-HH-MM-SS-000-N.json` 文件，可以添加：

```json
{
  "text": "Your custom description here",
  "lang": "zh",
  "blurhash": "UeKUpV4m8^%Meyn$RjWB"
}
```

## 🎨 与网站集成

照片组织完后，可以在博文中使用：

```markdown
---
title: My Trip to Tokyo
date: 2025-04-08
---

Here are my photos:

<PhotoSlide :photos="[
  { url: '/photos/p-2025-04-04-06-04-06-000-1.jpg', text: 'First day' },
  { url: '/photos/p-2025-04-06-07-38-22-000-1.jpg', text: 'Second day' }
]" />
```

或者创建专用组件 `PhotoMyTrip.vue`：

```typescript
const photos = raw.filter(p =>
  ['p-2025-04-04-06-04-06-000-1', 'p-2025-04-06-07-38-22-000-1'].some(id =>
    p.url.includes(id),
  ),
)
```

## ✨ 总结

现在你可以：

1. 🎯 将任意乱序照片放入 `/photos`
2. 🚀 运行 `npm run organize-photos`
3. ✅ 自动变成标准格式并生成元数据
4. 📝 编辑 JSON 添加描述
5. 🌐 在博文中使用照片

**Happy organizing!** 📸
