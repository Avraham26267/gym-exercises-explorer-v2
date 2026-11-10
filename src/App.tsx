import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { fetchExercises } from './api/wger'
import NavBar from './components/NavBar'
import StatusMessage from './components/StatusMessage'
import ExerciseDetailsPage from './pages/ExerciseDetailsPage'
import ExercisesPage from './pages/ExercisesPage'
import NotFoundPage from './pages/NotFoundPage'
import type { Exercise } from './types'
import './App.css'

function App() {
  // Les 3 états : chargement, erreur, données.
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Le tableau vide [] veut dire : appeler l'API une seule fois, au démarrage.
  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch(() =>
        setError(
          "Impossible de charger les exercices. Vérifie ta connexion internet, puis recharge la page.",
        ),
      )
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <NavBar />
      <main>
        {loading || error ? (
          <StatusMessage loading={loading} error={error} />
        ) : (
          <Routes>
            <Route path="/" element={<ExercisesPage exercises={exercises} />} />
            <Route
              path="/exercises/:id"
              element={<ExerciseDetailsPage exercises={exercises} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </main>
    </>
  )
}

export default App
