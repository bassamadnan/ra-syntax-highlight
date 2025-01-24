# RA Syntax Highlighter VSCode Extension

A Visual Studio Code extension for .ra files featuring syntax highlighting and comment toggling (Ctrl+/).

## Features
- Syntax highlighting for SQL-style keywords
- Comment toggling with Ctrl+/
- Custom operator and assignment highlighting

![RA Syntax Preview](https://i.imgur.com/lX5xTNr.png)  

## Installation

### Install from VSIX
1. Download the `.vsix` file in the repositry (`ra-syntax-highlight-0.0.1.vsix`)
2. Open VSCode
3. Press Ctrl+Shift+P and type "Install from VSIX"
4. Select the downloaded file

### Build from source
1. Clone repository
2. Install dependencies:
```bash
npm install
```
3. Build:
```bash
npm run compile
vsce package
```
4. Install generated `.vsix`:
```bash
code --install-extension ra-syntax-highlight-0.0.1.vsix
```

## Development
- Main syntax definitions in `syntaxes/ra.tmLanguage.json`
- Comment toggling logic in `src/extension.ts`
- Build configuration in `package.json`
