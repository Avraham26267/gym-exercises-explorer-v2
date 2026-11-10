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
        <h1>★ Mes favoris</h1>
        <p>Tes favoris restent gardés même si tu fermes ou recharges la page.</p>
      </div>
      {favorites.length === 0 ? (
        <div className="empty">
          <p>
            Tu n'as pas encore de favoris. Ouvre un exercice et clique sur « ☆
            Ajouter aux favoris ».
          </p>
          <Link to="/" className="button">
            Voir les exercices
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
                Retirer des favoris
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default FavoritesPage
