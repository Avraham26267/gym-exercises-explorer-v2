import ExerciseList from '../components/ExerciseList'
import type { Exercise } from '../types'

type ExercisesPageProps = {
  exercises: Exercise[]
}

// La page "/" : la liste de tous les exercices.
function ExercisesPage({ exercises }: ExercisesPageProps) {
  return (
    <>
      <h1>Gym Exercises Explorer</h1>
      <ExerciseList exercises={exercises} />
    </>
  )
}

export default ExercisesPage
