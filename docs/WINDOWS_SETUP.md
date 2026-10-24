# Run ArduTeensy on Windows

## 1. Install the tools once

- Git for Windows: https://git-scm.com/download/win — downloads the repository and manages history.
- Node.js LTS: https://nodejs.org/ — runs automated tests. npm is included.
- Python 3: https://www.python.org/downloads/windows/ — serves the app locally. Enable the Python installer option to add Python to PATH.
- Optional editor: Visual Studio Code, https://code.visualstudio.com/ . You can also ask Codex to edit files for you.

Reopen PowerShell after installation. Check:

```powershell
git --version
node --version
npm.cmd --version
py --version
```

Use `npm.cmd` in PowerShell if your computer blocks the `npm.ps1` script. This avoids changing your execution policy.

## 2. Download the repository with Git

A **clone** is a local copy connected to the GitHub repository. Open PowerShell and run:

```powershell
New-Item -ItemType Directory -Force "$HOME\Projects" | Out-Null
Set-Location "$HOME\Projects"
git clone https://github.com/NEW-WAY-2023/ArduTeensy.git
Set-Location ArduTeensy
```

Run clone only once. If the folder already exists, open it and inspect `git status` rather than deleting it or cloning over it.

## 3. Run the app

From the ArduTeensy folder:

```powershell
py -m http.server 8000 --directory dist
```

Open http://localhost:8000 in your browser. Keep that terminal open while using the app. Ctrl+C stops the server. If port 8000 is occupied, use 8001 in both the command and the URL. Do not open index.html by double-clicking: JavaScript modules require an HTTP server.

## 4. Run tests in a second PowerShell window

```powershell
Set-Location "$HOME\Projects\ArduTeensy"
npm.cmd test
npm.cmd run check
```

Expected: five passing tests, followed by successful syntax checks with no errors. No `npm install` is required for this version. These commands run JavaScript checks, not a C++ compiler.

## 5. Check the app manually

- Blink: start, observe HIGH/LOW, change interval to 1000 ms, and verify generated delays and trace. Stop and check output stops.
- Reset: check default parameters return and the monitor clears.
- PWM: start, set 0 then 255; check brightness and 0%/100% output.
- Analog: select Teensy, start, set 100%; expect 1023 and 3.30 V.
- Quiz: try a wrong answer, then a correct one; reload and check completion persists.
- Export: open the downloaded .ino in a text editor and compare it with the displayed sketch.
- Copy: compare pasted code with the displayed sketch. Clipboard access may require browser permission.
- Mobile/keyboard: narrow the browser; Tab through controls and use arrow keys on sliders.
- Navigation: visit all four screens and return to the workspace.

## 6. Get later changes

When your local work is committed and you are ready to update main:

```powershell
git status
git switch main
git pull --ff-only
npm.cmd test
```

If `git status` shows edits you do not understand, stop and ask Codex to explain them. Do not use reset --hard or force push to fix an unfamiliar problem.

## 7. Make your own branch

Set your identity once, replacing the example values:

```powershell
git config --global user.name "Your Name"
git config --global user.email "Your GitHub email or GitHub no-reply address"
```

Create a branch before editing:

```powershell
git switch -c feature/improve-blink-lesson
```

After editing, testing, and reviewing:

```powershell
git diff
npm.cmd test
npm.cmd run check
git add dist/app.js
git commit -m "Improve blink lesson explanation"
git push -u origin feature/improve-blink-lesson
```

The example stages only app.js. If other files changed intentionally, stage their exact paths too. Git may open browser authentication; sign in as NEW-WAY-2023. Never paste passwords or access tokens into chat or source files. Then open the repository on GitHub and create a pull request from the new branch to main.

## Troubleshooting

- Command not found: reinstall the missing tool, then reopen PowerShell.
- Wrong folder: `Get-Location` should end in ArduTeensy; `Get-ChildItem` should show package.json and dist.
- Old page: refresh; if needed use Ctrl+F5.
- Empty page: check that the local server is running and inspect the browser console for errors; share the error text with Codex.
- Progress disappeared: it is saved per browser and origin. localhost:8000, localhost:8001, and the hosted site have separate storage.
