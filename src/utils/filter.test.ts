import { describe, expect, it } from 'vitest'
import type { Exercise } from '../types'
import { filterExercisesByName } from './exercises'

// Crée un faux exercice avec seulement un id et un nom.
function makeExercise(id: number, name: string): Exercise {
  return {
    id,
    name,
    category: 'Arms',
    muscles: [],
    secondaryMuscles: [],
    equipment: [],
    description: '',
    imageUrl: null,
  }
}

const exercises: Exercise[] = [
  makeExercise(1, 'Biceps Curl'),
  makeExercise(2, 'Hammer Curl'),
  makeExercise(3, 'Bench Press'),
  makeExercise(4, 'Squat'),
]

describe('filterExercisesByName', () => {
  it('garde seulement les exercices dont le nom contient « curl »', () => {
    const names = filterExercisesByName(exercises, 'curl').map((e) => e.name)
    expect(names).toEqual(['Biceps Curl', 'Hammer Curl'])
  })

  it('ne fait pas de différence entre majuscules et minuscules', () => {
    expect(filterExercisesByName(exercises, 'CURL')).toHaveLength(2)
    expect(filterExercisesByName(exercises, 'bEnCh')).toHaveLength(1)
  })

  it('renvoie toute la liste quand le texte est vide', () => {
    expect(filterExercisesByName(exercises, '')).toEqual(exercises)
    expect(filterExercisesByName(exercises, '   ')).toEqual(exercises)
  })

  it('renvoie une liste vide quand rien ne correspond', () => {
    expect(filterExercisesByName(exercises, 'deadlift')).toEqual([])
  })
})
