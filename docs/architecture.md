# Architecture · Gym Exercises Explorer

## Les outils
- **Vite + React + TypeScript** (sans `any`).
- **React Router** pour les pages.
- **Vitest** (+ `@vitest/ui`) pour les tests.
- **CSS écrit à la main** (Flexbox), sans librairie de style.

## Les dossiers (prévus)
```
src/
  types.ts            le type Exercise (et le type des données brutes de l'API)
  api/                la fonction qui appelle l'API wger
  utils/              la logique pure, testée avec Vitest (transformer, filtrer, favoris)
  components/         les composants réutilisables, un fichier par composant
  pages/              une page par route
```

## Les pages (routes)
| Route | Composant page |
|---|---|
| `/` | `ExercisesPage` |
| `/exercises/:id` | `ExerciseDetailsPage` (lit l'id avec `useParams`) |
| `/favorites` | `FavoritesPage` |
| `/random` | `RandomPage` |
| `*` | `NotFoundPage` |

## Les composants (au moins 4)
- `NavBar` : le menu, avec des `NavLink`.
- `ExerciseList` : affiche une liste d'exercices avec `map` et une `key`.
- `ExerciseCard` : un exercice dans la liste (nom + catégorie), avec un lien vers ses détails.
- `SearchBar` : le champ de recherche.
- `StatusMessage` : le message « Loading… » ou le message d'erreur.

## Le chemin des données
1. Au démarrage, un `useEffect` appelle l'API wger avec `fetch`.
2. Pendant l'attente, le state `loading` vaut `true` → j'affiche « Loading… ».
3. Si ça échoue, je garde le message dans le state `error` → j'affiche l'erreur.
4. Si ça marche, une fonction de `utils/` transforme chaque exercice brut de l'API en `Exercise` simple (nom anglais, description sans HTML) → state `exercises`.
5. Les pages reçoivent les exercices et les affichent. La recherche filtre la liste avec une fonction de `utils/`.
6. Les favoris sont une liste d'`id`, gardée dans `localStorage` pour rester après un rechargement.
