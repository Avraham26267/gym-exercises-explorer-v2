import { Link } from 'react-router'
import type { Exercise } from '../types'

type ExerciseCardProps = {
  exercise: Exercise
}

// Un exercice dans la liste : toute la carte est un lien vers ses détails.
function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Link to={`/exercises/${exercise.id}`} className="exercise-card">
      <h2>{exercise.name}</h2>
      <span className="category">{exercise.category}</span>
    </Link>
  )
}

export default ExerciseCard
