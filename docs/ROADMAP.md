# Suggested next stages

These are proposed tasks, not completed features. Keep one stage per reviewable pull request.

| Stage | Change | Acceptance |
| --- | --- | --- |
| 1 | Browser baseline | Test the three experiments, navigation, progress reload, sketch export, and mobile/keyboard interactions. Record actual results. |
| 2 | Readability | Format app.js and split screen renderers without changing behavior; existing model and browser tests pass. |
| 3 | CI | Run test/check commands on GitHub pull requests; demonstrate a successful Actions run. |
| 4 | Blink instrumentation | Show period and frequency live; test interval endpoints and verify display. |
| 5 | Project saving | Export/import a validated project JSON file; handle malformed files and preserve old saved state. |
| 6 | Deployment | Choose and configure one deployment workflow; document how a reviewed commit reaches the website and how to roll back. |
| 7 | Hardware extensions | Define a specific supported board and browser before adding Web Serial or compiled-code simulation. Test with real hardware separately. |

No stage should silently replace the teaching simulator with claims of general C++ execution or full electrical accuracy.
