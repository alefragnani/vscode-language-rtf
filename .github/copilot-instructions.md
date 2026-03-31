# RTF Language Extension for VS Code

Always reference these instructions first and fall back to additional search or terminal commands only when project files do not provide enough context.

## Project Overview

This repository contains a Visual Studio Code extension that provides Rich Text Format (RTF) language support, including language registration, syntax grammar contribution, and "What's New" command integration.

The extension is implemented in TypeScript and bundled for both desktop and web targets.

## Technology Stack

- Language: TypeScript
- Runtime: VS Code Extension API (Node + Web)
- Bundler: Webpack 5
- Linting: ESLint (`eslint-config-vscode-ext`)
- Testing: Mocha + `@vscode/test-electron`

## Working Effectively

Bootstrap and local setup:

```bash
git submodule init
git submodule update
npm install
```

Build and development quickstart:

```bash
npm run build
npm run lint
```

- Use `npm run watch` during active development.
- Use VS Code "Launch Extension" (F5) to validate behavior in Extension Development Host.
- Expected command timings are usually under 10 seconds.
- Never cancel `npm install`, `npm run watch`, or `npm test` once started.
## Build and Development Commands

- `npm run compile` - TypeScript compilation
- `npm run build` - Webpack development build
- `npm run watch` - Continuous webpack build
- `npm run lint` - ESLint validation
- `npm run test` - Full test suite
- `npm run vscode:prepublish` - Production build

Expected build outputs in `dist/`:

- `extension-node.js`
- `extension-web.js`

## Testing and Validation

Automated tests use the VS Code test runner and may fail in restricted environments due to VS Code download/network constraints.

Manual validation checklist:

1. Run `npm run build` successfully.
2. Press F5 to launch Extension Development Host.
3. Open a `.rtf` file and verify language association and syntax highlighting.
4. Confirm the "What's New" command is visible and executes.

If `npm test` fails with connectivity errors to VS Code download endpoints, treat this as environment-related unless code-level failures are present.

## Project Structure and Key Files

```
src/
└── extension.ts          # Extension activation and command registration

syntaxes/
└── rtf.tmLanguage        # RTF grammar definition

dist/                     # Webpack bundles (extension-node.js, extension-web.js)
out/                      # Compiled TypeScript files
l10n/                     # Localization files
syntaxes/                 # TextMate grammar for RTF syntax
vscode-whats-new/         # Git submodule for What's New

rtf.configuration.json    # Language configuration
```
## Coding Conventions and Patterns

### Indentation

- Use spaces, not tabs.
- Use 4 spaces for indentation.

### Naming Conventions

- Use PascalCase for `type` names
- Use PascalCase for `enum` values
- Use camelCase for `function` and `method` names
- Use camelCase for `property` names and `local variables`
- Use whole words in names when possible

### Types

- Do not export `types` or `functions` unless you need to share it across multiple components
- Do not introduce new `types` or `values` to the global namespace
- Prefer `const` over `let` when possible.

### Strings

- Prefer double quotes for new code; some existing files may still use single quotes.
- User-facing strings use two localization mechanisms:
  - **Manifest contributions** (commands, settings, walkthrough metadata): use `%key%` placeholders in `package.json`, with translations in `package.nls.json` and `package.nls.{LANGID}.json`. Do **not** use `l10n.t` for these.
  - **Runtime messages** (shown from extension code): use `l10n.t("message")`, with translations in `l10n/bundle.l10n.json` and `l10n/bundle.l10n.{LANGID}.json`.
- Externalized strings must not use string concatenation. Use placeholders instead (`{0}`).

### Code Quality

- All production source files under `src/` (excluding tests under `src/test`) must include the standard project copyright header
- Prefer `async` and `await` over `Promise` and `then` calls
- All user facing messages must be localized using the applicable localization framework (for example `l10n.t` method)
- Keep imports organized: VS Code first, then internal modules.
- Use semicolons at the end of statements.
- Keep changes minimal and aligned with existing style.

### Import Organization

- Import VS Code API first: `import * as vscode from "vscode"`
- Group related imports together
- Use named imports for specific VS Code types
- Import from local modules using relative paths

## Extension Features and Configuration

### Key Features
1. **Syntax Highlighting**: Syntax highlighting for `.rtf` files based on TextMate grammar
2. **Remote Development**: Support for remote development scenarios
3. **Internationalization support**: Localization of all user-facing strings

## Dependencies and External Tools

- Requires `vscode-whats-new` submodule initialization.
- No external runtime tools are required beyond standard extension toolchain.

## Troubleshooting and Known Limitations

- If build fails after dependency updates, remove `dist/` and `out/`, then rebuild.
- If tests fail in headless/restricted environments, validate with compile/lint/build plus manual Extension Host checks.
- Ensure submodule initialization if linting references `vscode-whats-new`.

## CI and Pre-Commit Validation

Before committing:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Run `npm run test-compile`.

Use `npm run VS Code:prepublish` to verify production bundling before release tasks.

## Common Tasks

Add or update a command:

1. Add command contribution in `package.json`.
2. Add localization key in `package.nls.json` and translated files.
3. Register handler in `src/extension.ts`.
4. Rebuild and validate in Extension Development Host.

Update grammar/configuration:

1. Edit `syntaxes/rtf.tmLanguage` and/or `rtf.configuration.json`.
2. Run `npm run build`.
3. Validate tokenization and language behaviors in real `.rtf` samples.