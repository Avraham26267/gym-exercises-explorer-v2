import type { Exercise } from '../types'
import ExerciseCard from './ExerciseCard'

type ExerciseListProps = {
  exercises: Exercise[]
}

// Affiche une carte pour chaque exercice. La key (l'id) aide React à suivre chaque carte.
function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <ul className="exercise-list">
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <ExerciseCard exercise={exercise} />
        </li>
      ))}
    </ul>
  )
}

export default ExerciseList
