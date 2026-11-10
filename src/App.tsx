import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import exercisesData from './data/exercises.json'
import ExerciseDetailsPage from './pages/ExerciseDetailsPage'
import ExercisesPage from './pages/ExercisesPage'
import NotFoundPage from './pages/NotFoundPage'
import type { Exercise } from './types'
import './App.css'

// Pour l'instant, les exercices viennent d'un fichier local (l'API arrive à la tâche 3).
const exercises: Exercise[] = exercisesData

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<ExercisesPage exercises={exercises} />} />
          <Route
            path="/exercises/:id"
            element={<ExerciseDetailsPage exercises={exercises} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
