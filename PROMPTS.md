# יומן פרומפטים

## 2026-11-04

**12:52 · claude**

> Background (from the session that started this one):
> Final project of the student's front-end course 2883 (prof Yariv Gilad, Ono). Read the memory file `fac-projet-2883.md` first: it has every rule from the prof's Notion page (https://app.notion.com/p/2883-3f91d753ff15812c853ee8f8379750a4), the deadline (submit Fri 13/11/2026 09:00 on Yedion, ONE file with name + ID + repo link, single submission), the oral defense on 17/11, and the grading. This folder is the NEW public repo Avraham26267/gym-exercises-explorer-v2, freshly created from template YarivGilad/react-project-starter (only the Initial commit). Follow AGENTS.md strictly: one task at a time from tasks.md, stop after each task and explain in 3 simple sentences, never run git commit yourself (give the student the exact commands to copy), never edit past PROMPTS.md entries, and never write to PROMPTS.md yourself (the Claude Code hook does it). Order from the prof: 1) check the PROMPTS.md hook works (the student may need to approve the hook once), 2) `npm create vite＠latest . -- --template react-ts` choosing 'Ignore files and continue' (never Remove), 3) PRD.md (who/why, pages incl. 2 extra interactive pages, 3-5 'When I…, I see…' lines, link to docs/architecture.md) and tasks.md (≤12 tasks, each with 'Done when:'), task 1 local JSON list with a type, task 2 React Router (list, /exercises/:id with useParams, nav with NavLink), task 3 real fetch from wger API (https://wger.de/api/v2/exerciseinfo/?language=2, free, no key) with loading/error states, task 4 ≥5 Vitest tests on real logic + ＠vitest/ui + `test:ui` script, then 2 extra pages (ideas: Favorites with localStorage, Random exercise), search, own CSS with Flexbox + narrow screen, README (app, run, tests, API). No `any`, ≥4 own components in separate files, npm run build and npm test must pass. Idea, PRD content and app concept come from the old repo `~/Applications/gym-exercises-explorer` (PRD.md, tasks.md there) — reuse the idea and update the PRD, but rebuild the code task by task, never copy the old code in bulk, and never copy the prof's sample app countries-explorer. The student is a beginner: talk in simple French, short sentences, explain each change so they can defend it orally without AI. Spread work over several days (the prof reads dates). Stop for the student to test after each task.
> 
> Task:
> Salut, c'est mon projet de fac, on commence. Vérifie d'abord que PROMPTS.md se remplit bien, puis on suit le README du template étape par étape.
> 
> Shared notes folder for this group of sessions (outside the repo; read siblings' notes there, leave hand-over notes or large findings there instead of pasting them into messages): /Users/danielavrahamberrebi/Library/Application Support/Claude/side-session-notes/local_b7e7d39a-2125-42c7-aaec-bc093a6993ff

**12:56 · claude**

> Je sais pas que, dis-moi qu'est-ce que tu me conseilles de faire. Je

**12:57 · claude**

> Ouvre-moi la page parce que j'arrive pas.
Note de moi : ce premier message a été envoyé depuis une autre session Claude. Ma vraie demande, c'est la dernière phrase en français.

Vérifié : la page Vite + React s'affiche sur localhost, le compteur marche.
**13:50 · claude**

> FAIT

**13:51 · claude**

> Oui, montre le plan

**13:52 · claude**

> Oui, écris-les

**13:53 · claude**

> <bash-input>npm run dev</bash-input><bash-stdout>&gt; gym-exercises-explorer-v2@0.0.0 dev
> &gt; vite
> 
> 
>   VITE v8.3.5  ready in 143 ms
> 
>   ➜  Local:   http://localhost:5173/
>   ➜  Network: use --host to expose
>   ➜  press h + enter to show help
> [This command was still running in the terminal pane (tab 1) when its output was captured; it keeps running there, where the user can see and interact with it. Use read_terminal with tab_id "1" to check on it.]</bash-stdout><bash-stderr></bash-stderr>
Vérifié : j'ai relu le PRD, les tâches et l'architecture.

**13:56 · claude**

> <bash-input>git commit -m "Ajout du PRD, des tâches et de l'architecture"</bash-input><bash-stdout>[main 252f612] Ajout du PRD, des tâches et de l'architecture
>  4 files changed, 155 insertions(+), 1 deletion(-)
>  create mode 100644 PRD.md
>  create mode 100644 docs/architecture.md
>  create mode 100644 tasks.md</bash-stdout><bash-stderr></bash-stderr>
