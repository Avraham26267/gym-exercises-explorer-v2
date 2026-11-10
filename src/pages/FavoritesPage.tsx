import { Link } from 'react-router'
import ExerciseCard from '../components/ExerciseCard'
import type { Exercise } from '../types'
import { getFavoriteExercises } from '../utils/favorites'

type FavoritesPageProps = {
  exercises: Exercise[]
  favoriteIds: number[]
  onToggleFavorite: (id: number) => void
}

// La page "/favorites" : les exercices gardés en favoris, avec un bouton pour en retirer un.
function FavoritesPage({
  exercises,
  favoriteIds,
  onToggleFavorite,
}: FavoritesPageProps) {
  const favorites = getFavoriteExercises(exercises, favoriteIds)

  return (
    <>
      <h1>Mes favoris</h1>
      {favorites.length === 0 ? (
        <p>
          Tu n'as pas encore de favoris. Ouvre un exercice et clique sur ☆ pour
          l'ajouter. <Link to="/">Voir la liste</Link>
        </p>
      ) : (
        <ul className="exercise-list">
          {favorites.map((exercise) => (
            <li key={exercise.id}>
              <ExerciseCard exercise={exercise} />
              <button type="button" onClick={() => onToggleFavorite(exercise.id)}>
                Retirer
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default FavoritesPage
