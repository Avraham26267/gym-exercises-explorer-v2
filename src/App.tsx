import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { fetchExercises } from './api/wger'
import NavBar from './components/NavBar'
import StatusMessage from './components/StatusMessage'
import ExerciseDetailsPage from './pages/ExerciseDetailsPage'
import ExercisesPage from './pages/ExercisesPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage'
import RandomPage from './pages/RandomPage'
import type { Exercise } from './types'
import {
  canSaveFavorites,
  loadFavorites,
  saveFavorites,
  toggleFavorite,
} from './utils/favorites'
import './App.css'

function App() {
  // Les 3 états : chargement, erreur, données.
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Les favoris : une liste d'ids, lue dans localStorage au démarrage.
  const [favoriteIds, setFavoriteIds] = useState<number[]>(loadFavorites)

  // false si le navigateur bloque localStorage : on prévient l'utilisateur.
  const [canSave] = useState(canSaveFavorites)

  // À chaque changement des favoris, on les sauvegarde dans localStorage.
  useEffect(() => {
    saveFavorites(favoriteIds)
  }, [favoriteIds])

  function handleToggleFavorite(id: number) {
    setFavoriteIds((current) => toggleFavorite(current, id))
  }

  // Le numéro de l'essai : il change quand on clique sur « Try again ».
  const [attempt, setAttempt] = useState(0)

  // Appelle l'API au démarrage, puis à chaque nouvel essai (quand attempt change).
  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch(() =>
        setError(
          'Could not load the exercises: the internet is off or the wger server is not answering.',
        ),
      )
      .finally(() => setLoading(false))
  }, [attempt])

  // « Try again » : on efface l'erreur, on remet « Loading… » et on relance l'appel.
  function handleRetry() {
    setError(null)
    setLoading(true)
    setAttempt((current) => current + 1)
  }

  return (
    <>
      <NavBar />
      {!canSave && (
        <p className="storage-warning" role="alert">
          ⚠️ Your browser blocks saving data for this site, so your favorites
          will be lost when you reload the page.
        </p>
      )}
      <main>
        {loading || error ? (
          <StatusMessage
            loading={loading}
            error={error}
            onRetry={handleRetry}
          />
        ) : (
          <Routes>
            <Route path="/" element={<ExercisesPage exercises={exercises} />} />
            <Route
              path="/exercises/:id"
              element={
                <ExerciseDetailsPage
                  exercises={exercises}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesPage
                  exercises={exercises}
                  favoriteIds={favoriteIds}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route path="/random" element={<RandomPage exercises={exercises} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </main>
      <footer className="footer">
        Exercise data from{' '}
        <a href="https://wger.de" target="_blank" rel="noreferrer">
          wger.de
        </a>
      </footer>
    </>
  )
}

export default App
