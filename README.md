# Gym Exercises Explorer

A small web app to explore gym exercises.
You can see a list of exercises, search one by name, open its page to see the muscles it works and the equipment you need, keep your favorite exercises, and get a random exercise.

Made for the final project of the front-end course 2883.

## What the app does

| Page | Address | What you can do |
|---|---|---|
| Exercises | `/` | See the list of exercises (name + category) and search by name. |
| Exercise details | `/exercises/:id` | See the name, category, muscles, equipment, description and image. Add or remove it from your favorites (★). |
| Favorites | `/favorites` | See your favorite exercises and remove one. They are saved in the browser (`localStorage`), so they stay after a reload. |
| Random | `/random` | See a random exercise, click **Another one** to get a new one, or **See details** to open its page. |
| Page not found | any other address | A clear message and a button to go back to the list. |

On a narrow screen (phone), everything shows in one column.

## The API

The exercises come from the **wger API**, which is free and needs no key:

```
https://wger.de/api/v2/exerciseinfo/?language=2&limit=100
```

- The app loads the first **100 exercises** (all 966 exercises are about 7 MB and too slow to load).
- Each exercise has its name and description in many languages (the `translations` list). The app keeps the **English** one (`language: 2`) and removes the HTML tags from the description.
- While the data loads, the app shows **Loading…**. If the internet is off, or if the server does not answer after 20 seconds, it shows a clear error message.

## Tools

- **Vite + React + TypeScript** (no `any`)
- **React Router** for the pages
- **Vitest** + **@vitest/ui** for the tests
- **Hand-written CSS** with Flexbox (no style library)

## Install and run

You need **Node.js 22** or newer (check with `node -v`).

1. Get the code and go into the folder:

   ```bash
   git clone https://github.com/Avraham26267/gym-exercises-explorer-v2.git
   cd gym-exercises-explorer-v2
   ```

2. Install the packages:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

4. Open the address shown in the terminal (usually http://localhost:5173) in your browser.

## Run the tests

Run all the tests once in the terminal:

```bash
npm test
```

Or open the Vitest interface in the browser, to see each test in green or red:

```bash
npm run test:ui
```

The tests check the real logic of the app (in `src/utils/`): turning an API exercise into a simple `Exercise`, choosing the English translation, removing HTML, finding an exercise by its id, the search filter, the favorites and the random pick.

## Other commands

| Command | What it does |
|---|---|
| `npm run build` | Checks the TypeScript types and builds the app for production (in `dist/`). |
| `npm run lint` | Checks the code with ESLint. |
| `npm run preview` | Shows the production build locally (after `npm run build`). |

## How the code is organized

```
src/
  types.ts        the Exercise type, and the types of the raw API data
  api/            the function that calls the wger API (fetch)
  utils/          the pure logic, tested with Vitest (transform, search, favorites, random)
  components/     reusable components (NavBar, ExerciseList, ExerciseCard, SearchBar, StatusMessage, FavoriteButton)
  pages/          one component per page (route)
```

More details: [PRD.md](PRD.md) (what the app must do), [tasks.md](tasks.md) (the steps) and [docs/architecture.md](docs/architecture.md) (how the code works).
