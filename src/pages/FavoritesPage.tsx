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
      <div className="page-header">
        <h1>★ My favorites</h1>
        <p>Your favorites stay saved, even if you close or reload the page.</p>
      </div>
      {favorites.length === 0 ? (
        <div className="empty">
          <p>
            You have no favorites yet. Open an exercise and click “☆ Add to
            favorites”.
          </p>
          <Link to="/" className="button">
            See the exercises
          </Link>
        </div>
      ) : (
        <ul className="exercise-list">
          {favorites.map((exercise) => (
            <li key={exercise.id}>
              <ExerciseCard exercise={exercise} />
              <button
                type="button"
                className="button button-danger"
                onClick={() => onToggleFavorite(exercise.id)}
              >
                Remove from favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default FavoritesPage
