# Build ArduTeensy with Codex and GitHub

## Understand the roles

- You decide what the learning experience should do and review the result.
- Codex can inspect code, implement a focused change, explain it, and run available tests.
- Git records snapshots (commits) of source files.
- GitHub stores the repository and lets you compare proposed changes in a pull request.
- A hosting service runs the website. Saving code to GitHub alone does not update the existing private Sites deployment.

## Start a repository task

In this existing conversation, identify `NEW-WAY-2023/ArduTeensy` in your request. For a separate Codex Cloud environment, current official guidance is to choose Work in > Cloud, select or create an environment, and select this GitHub repository. Connect/authorize GitHub if prompted. Review the prepared environment and test results before publishing the environment, then start a task. Environment publication is separate from website deployment. UI availability can vary by account.

Repository URL: https://github.com/NEW-WAY-2023/ArduTeensy

No dependency installation is needed for this version. Node.js runs `npm test` and `npm run check`; Python 3 serves the local app. AGENTS.md records the project's conventions for future Codex tasks. It is guidance, not a guarantee that every change is correct.

## Request one concrete improvement

Use this structure when talking to Codex:

1. Repository: which project to edit.
2. Outcome: what the user should be able to do.
3. Boundaries: what must keep working.
4. Acceptance: how to tell the change works.
5. Delivery: explanation, tests, branch, and pull request.

Example task:

> Work in NEW-WAY-2023/ArduTeensy. Read AGENTS.md and README.md. Add a live full-cycle duration and frequency readout to the Blink experiment. Use the current interval: period = 2 × interval; frequency = 1000 / period when period is in milliseconds. Keep PWM, analog input, export, and saved progress working. Add meaningful tests for the calculations, run npm test and npm run check, and check the UI if browser tooling is available. Explain each changed file in beginner-friendly language. Open a pull request on a feature branch; do not merge or deploy it.

A useful debugging request includes exact steps and observed output:

> In ArduTeensy, I selected Teensy, opened Read a sensor, pressed Start, and set the slider to 100%. I expected 1023 and 3.30 V, but saw [actual result]. Reproduce this, fix the cause, add a regression test, and explain the fix. Preserve the other experiments. Open a pull request.

For explanation without editing:

> Read dist/engine.js and explain how sample() works using the Blink experiment. Relate it to Arduino loop() and delay(). Do not change files.

## Review a pull request on GitHub

A branch is a separate line of work. A commit is a saved snapshot. A pull request (PR) proposes bringing branch changes into main. Merging accepts that proposal.

1. Open the repository's Pull requests area and choose the proposed change.
2. Read the description: what changed and what tests actually ran.
3. Use Files changed to review the before/after differences.
4. Ask Codex to explain unfamiliar code or make a follow-up correction.
5. Run the app and try the behavior described in the acceptance criteria.
6. Merge when satisfied. Request changes if behavior is missing or tests fail.
7. Update your local main using the Windows guide.

There is no automated GitHub Actions workflow or enforced branch protection configured in this import. Test results in a task report are not GitHub required checks. Adding CI is a proposed next improvement.

## Make future work more reliable

Keep changes small enough to inspect. Preserve working behavior with regression tests. Ask for observed evidence, not just 'it works'. Avoid requesting a framework rewrite, backend, cloud sync, USB integration, and new simulator all in one task. Add one capability, verify it, then continue. Browser and physical hardware validation should be reported separately from unit tests.

The current UI code is compact and would benefit from formatting and extracting rendering functions in a dedicated behavior-preserving task. First establish browser checks so that refactoring can be evaluated against working flows.

## Official guidance

- Codex Cloud: https://learn.chatgpt.com/docs/cloud
- AGENTS.md: https://learn.chatgpt.com/docs/agent-configuration/agents-md
