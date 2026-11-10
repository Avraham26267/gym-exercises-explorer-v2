import { describe, expect, it } from 'vitest'
import type { Exercise } from '../types'
import { pickRandomExercise } from './random'

function makeExercise(id: number, name: string): Exercise {
  return {
    id,
    name,
    category: 'Chest',
    muscles: [],
    secondaryMuscles: [],
    equipment: [],
    description: '',
    imageUrl: null,
  }
}

const exercises = [
  makeExercise(1, 'Bench Press'),
  makeExercise(2, 'Squat'),
  makeExercise(3, 'Deadlift'),
]

describe('pickRandomExercise', () => {
  it('utilise le nombre au hasard pour choisir la position', () => {
    // 0 → le premier, 0.99 → le dernier.
    expect(pickRandomExercise(exercises, null, () => 0)?.name).toBe('Bench Press')
    expect(pickRandomExercise(exercises, null, () => 0.99)?.name).toBe('Deadlift')
  })

  it("ne redonne jamais l'exercice déjà affiché", () => {
    for (const value of [0, 0.4, 0.99]) {
      expect(pickRandomExercise(exercises, 1, () => value)?.id).not.toBe(1)
    }
  })

  it("renvoie le seul exercice quand la liste n'en a qu'un", () => {
    const one = [makeExercise(7, 'Plank')]
    expect(pickRandomExercise(one, 7, () => 0.5)?.name).toBe('Plank')
  })

  it('renvoie null quand la liste est vide', () => {
    expect(pickRandomExercise([], null, () => 0.5)).toBeNull()
  })
})
