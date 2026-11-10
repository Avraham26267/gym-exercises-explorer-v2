import type { Exercise } from '../types'

// La clé sous laquelle les favoris sont gardés dans localStorage.
export const FAVORITES_KEY = 'favorites'

// Ajoute l'id s'il n'est pas dans la liste, sinon l'enlève.
// Renvoie une NOUVELLE liste (on ne modifie jamais un state directement).
export function toggleFavorite(favoriteIds: number[], id: number): number[] {
  if (favoriteIds.includes(id)) {
    return favoriteIds.filter((favoriteId) => favoriteId !== id)
  }
  return [...favoriteIds, id]
}

// Transforme le texte gardé dans localStorage en liste d'ids.
// Si le texte est vide ou abîmé, on repart d'une liste vide au lieu de planter.
export function parseFavorites(text: string | null): number[] {
  if (text === null) {
    return []
  }
  try {
    const data: unknown = JSON.parse(text)
    if (Array.isArray(data)) {
      return data.filter((item): item is number => typeof item === 'number')
    }
    return []
  } catch {
    return []
  }
}

// Garde seulement les exercices qui sont dans les favoris.
export function getFavoriteExercises(
  exercises: Exercise[],
  favoriteIds: number[],
): Exercise[] {
  return exercises.filter((exercise) => favoriteIds.includes(exercise.id))
}

// Lit les favoris dans localStorage (au démarrage de l'appli).
export function loadFavorites(): number[] {
  try {
    return parseFavorites(localStorage.getItem(FAVORITES_KEY))
  } catch {
    return []
  }
}

// Écrit les favoris dans localStorage, pour qu'ils restent après un rechargement.
export function saveFavorites(favoriteIds: number[]): void {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds))
  } catch {
    // Si le navigateur bloque localStorage, l'appli continue de marcher sans sauvegarde.
  }
}
