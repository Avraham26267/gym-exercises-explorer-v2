import type { ApiExerciseResponse, Exercise } from '../types'
import { toExercise } from '../utils/exercises'

// L'adresse de l'API wger : les exercices, en anglais (language=2), les 100 premiers.
const API_URL = 'https://wger.de/api/v2/exerciseinfo/?language=2&limit=100'

// Si l'API n'a pas répondu après 20 secondes, on arrête d'attendre (sinon « Chargement… » pour toujours).
const TIMEOUT_MS = 20000

// Appelle l'API, vérifie la réponse et transforme les données brutes en Exercise.
export async function fetchExercises(): Promise<Exercise[]> {
  const response = await fetch(API_URL, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })
  if (!response.ok) {
    throw new Error(`The server answered with error ${response.status}.`)
  }
  const data: ApiExerciseResponse = await response.json()

  const exercises: Exercise[] = []
  for (const apiExercise of data.results) {
    const exercise = toExercise(apiExercise)
    if (exercise) {
      exercises.push(exercise)
    }
  }
  return exercises
}
