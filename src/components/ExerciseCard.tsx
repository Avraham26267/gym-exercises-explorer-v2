import type { Exercise } from '../types'

type ExerciseCardProps = {
  exercise: Exercise
}

// Un exercice dans la liste : son nom et sa catégorie.
function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <article className="exercise-card">
      <h2>{exercise.name}</h2>
      <p>{exercise.category}</p>
    </article>
  )
}

export default ExerciseCard
