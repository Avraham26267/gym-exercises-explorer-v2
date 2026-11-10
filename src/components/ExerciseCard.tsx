import { Link } from 'react-router'
import type { Exercise } from '../types'

type ExerciseCardProps = {
  exercise: Exercise
}

// Un exercice dans la liste : son nom et sa catégorie, avec un lien vers ses détails.
function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <article className="exercise-card">
      <h2>
        <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>
      </h2>
      <p>{exercise.category}</p>
    </article>
  )
}

export default ExerciseCard
