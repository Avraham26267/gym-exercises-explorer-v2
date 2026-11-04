# PRD · Gym Exercises Explorer

## L'idée
Une appli web pour explorer des exercices de musculation.
Je vois la liste des exercices, je cherche par nom, et je clique sur un exercice pour voir sa page de détails.
Je peux garder mes exercices préférés et tirer un exercice au hasard.

## Pour qui, et pourquoi
- **Pour qui :** les personnes qui vont à la salle, surtout les débutants.
- **Pourquoi :** savoir vite quels muscles un exercice travaille et de quel matériel on a besoin, sans chercher sur plusieurs sites.

## Les données
- **API :** wger — https://wger.de/api/v2/exerciseinfo/?language=2
- Gratuite, sans clé, accessible directement depuis le navigateur.
- Pour chaque exercice : `id`, nom, catégorie (Abs, Legs, Chest…), muscles principaux et secondaires, matériel, description (en HTML), et parfois une image.
- Le nom et la description sont dans une liste `translations` : je garde la traduction anglaise (`language: 2`).

## Les pages
| Adresse | Page | Ce qu'on peut faire |
|---|---|---|
| `/` | Liste des exercices | Voir tous les exercices (nom + catégorie), chercher par nom. |
| `/exercises/:id` | Détails d'un exercice | Voir nom, catégorie, muscles, matériel, description, image. Ajouter ou retirer des favoris (★). |
| `/favorites` | Mes favoris *(page extra 1)* | Voir les exercices gardés en favoris, en retirer un. Les favoris restent après un rechargement (`localStorage`). |
| `/random` | Exercice au hasard *(page extra 2)* | Voir un exercice tiré au hasard, et cliquer sur « Un autre » pour en tirer un nouveau. |
| `*` | Page introuvable | Message clair et lien pour revenir à la liste. |

Un menu en haut de chaque page permet d'aller sur la liste, les favoris et l'exercice au hasard.
Sur un écran étroit (téléphone), tout s'affiche en une colonne.

## Ce que je dois voir (critères d'acceptation)
- When I open the app, I see « Chargement… » puis la liste des exercices.
- When the API ne répond pas, I see un message d'erreur clair au lieu d'une page vide.
- When I click on an exercise, I see sa page de détails avec son nom, sa catégorie, ses muscles et son matériel.
- When I type « curl » dans la recherche, I see seulement les exercices dont le nom contient « curl ».
- When I add an exercise to my favorites and reload the page, I see toujours cet exercice dans la page Favoris.

## Pas dans ce projet
- Pas de serveur, pas de base de données, pas de compte ni de connexion.
- Pas de programme d'entraînement ni de suivi des séances.

## Architecture
Le plan du code (pages, composants, chemin des données) : voir [docs/architecture.md](docs/architecture.md).
