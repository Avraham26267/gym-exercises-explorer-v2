import { Link, useParams } from 'react-router'
import FavoriteButton from '../components/FavoriteButton'
import type { Exercise } from '../types'
import { findExerciseById } from '../utils/exercises'

type ExerciseDetailsPageProps = {
  exercises: Exercise[]
  favoriteIds: number[]
  onToggleFavorite: (id: number) => void
}

// Affiche une liste, ou « Aucun » si elle est vide.
function listOrNone(items: string[]): string {
  return items.length > 0 ? items.join(', ') : 'Aucun'
}

// La page "/exercises/:id" : useParams lit l'id dans l'adresse.
function ExerciseDetailsPage({
  exercises,
  favoriteIds,
  onToggleFavorite,
}: ExerciseDetailsPageProps) {
  const { id } = useParams()
  const exercise = findExerciseById(exercises, id)

  if (!exercise) {
    return (
      <div className="empty">
        <h1>Exercice introuvable</h1>
        <Link to="/" className="button">
          Retour à la liste
        </Link>
      </div>
    )
  }

  return (
    <>
      <Link to="/" className="button button-outline back-link">
        ← Retour à la liste
      </Link>
      <article className="exercise-details">
        <div className="details-header">
          <h1>{exercise.name}</h1>
          <FavoriteButton
            isFavorite={favoriteIds.includes(exercise.id)}
            onToggle={() => onToggleFavorite(exercise.id)}
          />
        </div>

        <div className="details-body">
          {exercise.imageUrl && (
            <img src={exercise.imageUrl} alt={exercise.name} />
          )}
          <dl className="details-info">
            <div>
              <dt>Catégorie</dt>
              <dd>
                <span className="category">{exercise.category}</span>
              </dd>
            </div>
            <div>
              <dt>Muscles principaux</dt>
              <dd>{listOrNone(exercise.muscles)}</dd>
            </div>
            <div>
              <dt>Muscles secondaires</dt>
              <dd>{listOrNone(exercise.secondaryMuscles)}</dd>
            </div>
            <div>
              <dt>Matériel</dt>
              <dd>{listOrNone(exercise.equipment)}</dd>
            </div>
          </dl>
        </div>

        {exercise.description && (
          <p className="description">{exercise.description}</p>
        )}
      </article>
    </>
  )
}

export default ExerciseDetailsPage
