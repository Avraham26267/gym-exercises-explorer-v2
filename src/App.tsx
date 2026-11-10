import ExerciseList from './components/ExerciseList'
import exercisesData from './data/exercises.json'
import type { Exercise } from './types'
import './App.css'

// Pour l'instant, les exercices viennent d'un fichier local (l'API arrive à la tâche 3).
const exercises: Exercise[] = exercisesData

function App() {
  return (
    <main>
      <h1>Gym Exercises Explorer</h1>
      <ExerciseList exercises={exercises} />
    </main>
  )
}

export default App
