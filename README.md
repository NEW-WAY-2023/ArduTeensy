# ArduTeensy — Arduino & Teensy Lab

An interactive educational web app for Arduino Uno R3 and Teensy 4.1 experiments. This repository contains the full editable application source.

## Start here

1. [Run the app on Windows](docs/WINDOWS_SETUP.md).
2. [Learn the Codex + GitHub workflow](docs/CODEX_WORKFLOW.md).
3. [Choose a small next improvement](docs/ROADMAP.md).

## Working features

- LED blink simulation with an adjustable interval.
- PWM brightness simulation with an adjustable duty value.
- Virtual potentiometer with ideal 10-bit ADC readings.
- Board selection, generated Arduino sketches, copy/export, and output monitor.
- Three knowledge checks and progress saved in browser local storage.

The simulator models these specific experiments. It does not compile arbitrary C++, emulate an MCU, connect to USB hardware, or solve electrical circuits. Physical boards and sketches have not been hardware-tested.

## Run and test

From the repository root, with Python 3 installed:

```powershell
py -m http.server 8000 --directory dist
```

Visit http://localhost:8000 . Press Ctrl+C in the terminal to stop.

With Node.js installed:

```powershell
npm test
npm run check
```

There are no JavaScript dependencies to install and no build step.

## Folder and file map

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Page shell, navigation, and entry point. |
| `dist/styles.css` | Layout, colors, fonts, responsive styling. |
| `dist/app.js` | Screens, controls, timers, storage, and sketch downloads. |
| `dist/engine.js` | Simulation math, lesson data, and sketch generation. |
| `tests/engine.test.mjs` | Automated checks for the core model. |
| `package.json` | Project metadata and test/check commands. |
| `AGENTS.md` | Project instructions for Codex and other coding agents. |
| `docs/WINDOWS_SETUP.md` | Installation, cloning, running, and troubleshooting. |
| `docs/CODEX_WORKFLOW.md` | How to request, inspect, and save improvements. |
| `docs/ROADMAP.md` | Suggested staged improvements with acceptance criteria. |
| `.gitignore` | Files Git should leave out, such as dependencies and secrets. |

`dist` often means generated build output in other projects. Here it contains the editable source files directly, because the app has no build system. Keep this folder name for compatibility; do not add a second copy in `src`.

## Verification status

Five automated tests cover blink transitions, PWM endpoints, ADC conversion, generated sketches, and lesson defaults. Syntax checks cover both JavaScript modules. Browser acceptance remains unverified: the original managed preview service was unavailable. Use the manual checklist in the Windows guide before approving UI changes. Automated tests do not replace visual or hardware testing.

## Source versus deployment

This GitHub repository stores code and version history. The earlier private Sites deployment is a separate managed project; pushes to this GitHub repository do **not** automatically update that website. No GitHub Pages or automatic deployment is configured. To deploy independently, serve the contents of `dist/` with a static HTTPS web host. Set up deployment as a separate reviewed task.

The import excludes the original hosting identity, credentials, and generated source ZIP. The app's source link points to this repository instead.
