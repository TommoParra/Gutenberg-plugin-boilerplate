# 🧱 Custom Gutenberg Blocks

Custom Gutenberg blocks for WordPress using native tooling. Minimal, reusable, and React-powered.

## ✨ What is Gutenberg?

Gutenberg is WordPress’s block-based editor. Each content element (paragraph, image, list, etc.) is a “block.”  
Under the hood, blocks are powered by **React**, compiled with **Webpack**, and registered using the `registerBlockType` API.

More on this: https://developer.wordpress.org/block-editor/

---

## 📁 File Structure

```bash
.
├── custom-gutenberg-blocks.php # Main plugin file
├── hello-world # Example block folder
│   ├── block.json # Block metadata
│   ├── build # Compiled assets
│   │   ├── index-rtl.css
│   │   ├── index.asset.php
│   │   ├── index.css
│   │   ├── index.css.map
│   │   ├── index.js
│   │   ├── index.js.map
│   │   ├── style-index-rtl.css
│   │   ├── style-index.css
│   │   └── style-index.css.map
│   ├── node_modules # Node dependencies
│   ├── package-lock.json
│   ├── package.json
│   └── src # Source files
│   ├── edit.js
│   ├── editor.scss
│   ├── index.js
│   ├── save.js
│   └── style.scss
├── package-lock.json
└── readme.md
```

---

## 🧪 Creating a New Block

### 1. Copy the example block

Duplicate the `hello-world` folder and rename it (e.g., `my-block`).

### 2. Register the new block in `custom-gutenberg-blocks.php`
```php
<?php
/**
 * Plugin Name: Custom Gutenberg Blocks
 */

add_action( 'init', function () {
    foreach ( [ 'hello-world', 'my-block' ] as $block ) {
        register_block_type( __DIR__ . "/$block" );
    }
} );
```

### 3. Update the block.json metadata
```json
{
  "apiVersion": 2,
  "name": "custom-block/my-block",
  "title": "Did You Know",
  "category": "text",
  "icon": "lightbulb",
  "description": "A fun tip block.",
  "attributes": {
    "content": {
      "type": "string",
      "source": "html",
      "selector": "p"
    }
  },
  "editorScript": "file:./build/index.js",
  "editorStyle": "file:./build/index.css",
  "style": "file:./build/style-index.css"
}
```

### 4. Update src/index.js
```js
registerBlockType('custom-block/my-block', {
  edit: Edit,
  save: Save,
});
```
### 5. Edit the block styles & markup
- src/edit.js + src/editor.scss: controls editor appearance
- src/save.js + src/style.scss: controls frontend output

# 🛠 Build the Block
```bash
cd my-block
npm install
npm run build
```

# 📦 Git & Repo Setup
Create a .gitignore in the root with:
```bash
**/node_modules/
**/build/
```

# 🚀 Zip for WordPress Upload
To create a production-ready plugin zip (from plugin root):
```bash
zip -r custom-gutenberg-blocks.zip . -x "*/src/*" "*.git*" "readme.md" "*/node_modules/*"
```

# 📚 Gutenberg Dev Docs
For full documentation, visit:
👉 https://developer.wordpress.org/block-editor/

