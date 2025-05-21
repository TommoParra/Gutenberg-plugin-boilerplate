# 🧱 CardCorp Blog Blocks

Custom Gutenberg blocks for CardCorp and BillPro blog content. Brand-aware, minimal, and extensible.

---

## 🚀 Getting Started

### 1. Install dependencies per block

Each block is self-contained and has its own build setup.  
To install dependencies, `cd` into the block folder and run:

```bash
cd example-block
npm install
```

### 2. Build or watch a block

Inside the block folder:

```bash
npm run build      # For production build
npm run start      # For development (watch mode)
```

> Add more blocks using `@wordpress/create-block`, then follow the same structure.

---

## 📦 Create ZIP for Plugin Installation

To generate a plugin `.zip` from the root including only the production files:

```bash
zip -r cardcorp-blog-blocks.zip . \
  -x "*node_modules*" \
  -x "*.git*" \
  -x "*/src/*" \
  -x "*/package.json" \
  -x "*/package-lock.json" \
  -x "readme.md"
```

This creates a flat zip with everything needed for installation via WordPress admin.

---

## 🗂️ Project Structure

```bash
tree -L 3 -I "node_modules"
.
├── cardcorp-blog-blocks.php       # Main plugin file, registers all blocks
├── example block                  # Block folder (can add more)
│   ├── block.json                 # Block metadata
│   ├── build                      # Compiled assets (used by WP)
│   ├── package.json               # Dev scripts and dependencies
│   └── src                        # Source files
│       ├── edit.js
│       ├── editor.scss
│       ├── index.js
│       ├── save.js
│       └── style.scss
└── readme.md                      # This file
```

---

## 🧩 Notes

- Blocks are brand-themed using a global class (`.brand-cardcorp`, `.brand-billpro`) applied to `<body>`.
- Only the `build` folder is needed by WordPress. Never upload `src` or `node_modules`.
- Each block is self-contained and modular.

---

Made by Tomi with ☕ and ❤️.
