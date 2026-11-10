# Tâches · Gym Exercises Explorer

Une tâche à la fois, dans l'ordre. Après chaque tâche : je lance l'appli, je vérifie, j'ajoute une ligne à moi dans `PROMPTS.md`, et je fais un commit.

## 1. Afficher une liste depuis un fichier local
Créer le type `Exercise` dans `src/types.ts`, un fichier JSON avec 5 exercices d'exemple, et les afficher avec les composants `ExerciseList` et `ExerciseCard` (avec `map` et une `key`). Pas encore d'API.
- **Done when:** je lance `npm run dev` et je vois les 5 noms d'exercices avec leur catégorie, sans erreur dans la console.

## 2. Ajouter les pages avec React Router
Installer React Router. Créer la page liste (`/`), la page détails (`/exercises/:id`, qui lit l'id avec `useParams`), une page introuvable (`*`) et le menu `NavBar` avec des `NavLink`.
- **Done when:** je clique sur un exercice et j'arrive sur `/exercises/<id>` avec son nom, sa catégorie, ses muscles et son matériel. Le menu me ramène à la liste. Une mauvaise adresse affiche « Page not found ».

## 3. Récupérer les vrais exercices depuis l'API wger
Remplacer le fichier local par un `fetch` dans un `useEffect`. Transformer les données brutes de l'API en `Exercise`. Afficher les 3 états : chargement, erreur, données (composant `StatusMessage`).
- **Done when:** je vois « Loading… », puis la vraie liste. Si je coupe internet et que je recharge, je vois un message d'erreur clair.

## 4. Écrire les premiers tests avec Vitest
Installer Vitest et `@vitest/ui`, ajouter les scripts `test` et `test:ui`. Écrire au moins 5 tests sur la vraie logique : transformer un exercice de l'API, choisir la traduction anglaise, enlever le HTML de la description, trouver un exercice par son id.
- **Done when:** `npm test` montre au moins 5 tests verts, et `npm run test:ui` ouvre l'interface de Vitest.

## 5. Rechercher un exercice par son nom
Ajouter le composant `SearchBar`. Le texte tapé filtre la liste (majuscules et minuscules comptent pareil). Ajouter des tests pour la fonction de filtre.
- **Done when:** je tape « curl » et je ne vois que les exercices dont le nom contient « curl ». Si j'efface le texte, toute la liste revient. Les nouveaux tests sont verts.

## 6. Ajouter la page Favoris
Un bouton ★ sur la page détails ajoute ou retire l'exercice des favoris. Les favoris sont gardés dans `localStorage`. La page `/favorites` les affiche. Ajouter des tests pour la logique des favoris.
- **Done when:** j'ajoute 2 exercices en favoris, je recharge la page, et je les vois toujours dans `/favorites`. Je peux en retirer un.

## 7. Ajouter la page Exercice au hasard
La page `/random` affiche un exercice tiré au hasard, avec un bouton « Another one » et un lien vers ses détails.
- **Done when:** quand je clique sur « Another one », un nouvel exercice s'affiche, et le lien m'amène à sa page de détails.

## 8. Mettre en page avec mon propre CSS
Écrire mon CSS avec Flexbox : menu, liste en cartes, page détails lisible. Sur un écran étroit, tout passe en une colonne.
- **Done when:** l'appli est lisible sur ordinateur et en mode téléphone (outils du navigateur, largeur 375 px), sans texte coupé ni barre de défilement horizontale.

## 9. Écrire le README
Expliquer ce que fait l'appli, comment l'installer et la lancer, comment lancer les tests, et quelle API elle utilise.
- **Done when:** quelqu'un qui ne connaît pas le projet peut lancer l'appli et les tests juste en lisant le README.

## 10. Vérification finale
Relire le code, enlever ce qui ne sert plus, vérifier qu'il n'y a aucun `any`.
- **Done when:** `npm run build`, `npm test` et `npm run lint` passent sans erreur, et chaque critère du `PRD.md` est vrai dans l'appli.

## 11. Tester les composants avec React Testing Library (bonus)
Installer React Testing Library et jsdom. Écrire des tests qui affichent de vrais composants et cliquent ou tapent dedans comme un utilisateur : la recherche filtre la liste, le bouton ★ change de texte, le message de chargement et d'erreur s'affiche, la carte mène à la bonne page.
- **Done when:** `npm test` montre les nouveaux tests de composants en vert (avec les anciens), et `npm run build` et `npm run lint` passent toujours.
