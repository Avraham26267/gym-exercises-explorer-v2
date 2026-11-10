import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { fetchExercises } from './api/wger'
import NavBar from './components/NavBar'
import StatusMessage from './components/StatusMessage'
import ExerciseDetailsPage from './pages/ExerciseDetailsPage'
import ExercisesPage from './pages/ExercisesPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage'
import type { Exercise } from './types'
import { loadFavorites, saveFavorites, toggleFavorite } from './utils/favorites'
import './App.css'

function App() {
  // Les 3 états : chargement, erreur, données.
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Les favoris : une liste d'ids, lue dans localStorage au démarrage.
  const [favoriteIds, setFavoriteIds] = useState<number[]>(loadFavorites)

  // À chaque changement des favoris, on les sauvegarde dans localStorage.
  useEffect(() => {
    saveFavorites(favoriteIds)
  }, [favoriteIds])

  function handleToggleFavorite(id: number) {
    setFavoriteIds((current) => toggleFavorite(current, id))
  }

  // Le tableau vide [] veut dire : appeler l'API une seule fois, au démarrage.
  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch(() =>
        setError(
          "Impossible de charger les exercices : internet est coupé ou le serveur wger ne répond pas. Recharge la page pour réessayer.",
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </main>
    </>
  )
}

export default App
