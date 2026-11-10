import { Link, useParams } from 'react-router'
import type { Exercise } from '../types'
import { findExerciseById } from '../utils/exercises'

type ExerciseDetailsPageProps = {
  exercises: Exercise[]
}

// Affiche une liste, ou « Aucun » si elle est vide.
function listOrNone(items: string[]): string {
  return items.length > 0 ? items.join(', ') : 'Aucun'
}

// La page "/exercises/:id" : useParams lit l'id dans l'adresse.
function ExerciseDetailsPage({ exercises }: ExerciseDetailsPageProps) {
  const { id } = useParams()
  const exercise = findExerciseById(exercises, id)

  if (!exercise) {
    return (
      <>
        <h1>Exercice introuvable</h1>
        <Link to="/">Retour à la liste</Link>
      </>
    )
  }

  return (
    <article className="exercise-details">
      <h1>{exercise.name}</h1>
      {exercise.imageUrl && (
        <img src={exercise.imageUrl} alt={exercise.name} width={300} />
      )}
      <p>
        <strong>Catégorie :</strong> {exercise.category}
      </p>
      <p>
        <strong>Muscles principaux :</strong> {listOrNone(exercise.muscles)}
      </p>
      <p>
        <strong>Muscles secondaires :</strong>{' '}
        {listOrNone(exercise.secondaryMuscles)}
      </p>
      <p>
        <strong>Matériel :</strong> {listOrNone(exercise.equipment)}
      </p>
      <p>{exercise.description}</p>
    </article>
  )
}

export default ExerciseDetailsPage
