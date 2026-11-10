import { describe, expect, it } from 'vitest'
import type { Exercise } from '../types'
import {
  canSaveFavorites,
  getFavoriteExercises,
  parseFavorites,
  toggleFavorite,
} from './favorites'

describe('toggleFavorite', () => {
  it("ajoute l'id quand il n'est pas encore en favori", () => {
    expect(toggleFavorite([1, 2], 3)).toEqual([1, 2, 3])
  })

  it("retire l'id quand il est déjà en favori", () => {
    expect(toggleFavorite([1, 2, 3], 2)).toEqual([1, 3])
  })

  it('ne modifie pas la liste de départ', () => {
    const start = [1, 2]
    toggleFavorite(start, 3)
    expect(start).toEqual([1, 2])
  })
})

describe('parseFavorites', () => {
  it('lit une liste d’ids gardée en texte JSON', () => {
    expect(parseFavorites('[4,7]')).toEqual([4, 7])
  })

  it("renvoie une liste vide quand il n'y a rien dans localStorage", () => {
    expect(parseFavorites(null)).toEqual([])
  })

  it('renvoie une liste vide quand le texte est abîmé', () => {
    expect(parseFavorites('pas du json')).toEqual([])
    expect(parseFavorites('{"a":1}')).toEqual([])
  })
})

describe('getFavoriteExercises', () => {
  function makeExercise(id: number, name: string): Exercise {
    return {
      id,
      name,
      category: 'Legs',
      muscles: [],
      secondaryMuscles: [],
      equipment: [],
      description: '',
      imageUrl: null,
    }
  }

  it('garde seulement les exercices en favori', () => {
    const exercises = [
      makeExercise(1, 'Squat'),
      makeExercise(2, 'Lunges'),
      makeExercise(3, 'Deadlift'),
    ]
    const names = getFavoriteExercises(exercises, [3, 1]).map((e) => e.name)
    expect(names).toEqual(['Squat', 'Deadlift'])
  })
})

describe('canSaveFavorites', () => {
  it('renvoie false quand le navigateur bloque localStorage', () => {
    // Ici (Node), localStorage n'existe pas : c'est comme un navigateur qui le bloque.
    expect(canSaveFavorites()).toBe(false)
  })
})
