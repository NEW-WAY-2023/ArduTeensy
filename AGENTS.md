# ArduTeensy contributor guidance

## Project and owner

Build a clear, accessible educational lab for Arduino Uno R3 and Teensy 4.1. The owner understands electronics and basic Arduino code but is new to web development, Git, and deployment. Explain important file changes and technical decisions in simple language. Give Windows PowerShell commands when the owner needs local instructions.

## Architecture

This is a buildless static app. `dist/` contains editable HTML, CSS, and JavaScript source, not generated output. `dist/engine.js` holds pure simulation logic, lesson data, and sketch generation. `dist/app.js` handles the UI. Tests live in `tests/`; guides live in `docs/`. There are no dependencies or backend services.

Read README.md and the relevant files before editing. Keep changes focused. Preserve existing behavior; avoid framework migrations or extra dependencies unless the task needs them. Keep browser persistence backward-compatible or provide a migration.

## Verification

Run `npm test` and `npm run check` after implementation changes. Add tests for meaningful new simulation behavior and bugs. For UI changes, test the affected browser flows when browser tooling is available, including mobile sizing and keyboard access. Otherwise explicitly report browser checks as unverified. Never present an automated logic test as proof that the interface or physical hardware works.

## Electronics boundaries

Clearly distinguish simulated behavior, generated C++ sketches, and physical hardware. Keep Uno and Teensy voltage assumptions separate. Teensy 4.1 inputs are not 5 V tolerant. Do not claim arbitrary C++ compilation, MCU emulation, or USB support unless actually implemented and verified. Check official board documentation for new pin assignments or electrical claims.

## Delivery

Use a feature branch and pull request for future changes when GitHub write access is available. Do not merge or deploy unless the task requests it. Describe the result, files changed, tests actually run, and remaining limitations. Do not commit credentials, hosting identity, dependencies, or generated source archives.
