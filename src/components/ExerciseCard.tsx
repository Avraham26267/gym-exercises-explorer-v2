import { Link } from 'react-router'
import type { Exercise } from '../types'

type ExerciseCardProps = {
  exercise: Exercise
}

// Un exercice dans la liste : toute la carte est un lien vers ses détails.
// On montre le nom, les muscles travaillés et la catégorie.
function ExerciseCard({ exercise }: ExerciseCardProps) {
  const muscles =
    exercise.muscles.length > 0
      ? exercise.muscles.join(', ')
      : 'Muscles not listed'

  return (
    <Link to={`/exercises/${exercise.id}`} className="exercise-card">
      <h2>{exercise.name}</h2>
      <p className="card-muscles">{muscles}</p>
      <span className="category">{exercise.category}</span>
    </Link>
  )
}

export default ExerciseCard
