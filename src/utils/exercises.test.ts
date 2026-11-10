import { describe, expect, it } from 'vitest'
import type { ApiExercise, Exercise } from '../types'
import {
  findEnglishTranslation,
  findExerciseById,
  stripHtml,
  toExercise,
} from './exercises'

// Un faux exercice, avec la même forme que les données de l'API wger.
const apiExercise: ApiExercise = {
  id: 20,
  category: { id: 13, name: 'Shoulders' },
  muscles: [{ id: 2, name: 'Anterior deltoid', name_en: 'Shoulders' }],
  muscles_secondary: [{ id: 5, name: 'Triceps brachii', name_en: '' }],
  equipment: [{ id: 3, name: 'Dumbbell' }],
  images: [
    { image: 'https://wger.de/image-2.png', is_main: false },
    { image: 'https://wger.de/image-1.png', is_main: true },
  ],
  translations: [
    { name: 'Schulterdrücken', description: '<p>Deutsch</p>', language: 1 },
    {
      name: 'Arnold Shoulder Press',
      description: '<p>Sit on a bench.</p>\n<p>Press the dumbbells.</p>',
      language: 2,
    },
  ],
}

describe('findEnglishTranslation', () => {
  it('choisit la traduction anglaise (language 2)', () => {
    const english = findEnglishTranslation(apiExercise.translations)
    expect(english?.name).toBe('Arnold Shoulder Press')
  })

  it("renvoie undefined s'il n'y a pas de traduction anglaise", () => {
    const english = findEnglishTranslation([
      { name: 'Kniebeuge', description: '', language: 1 },
    ])
    expect(english).toBeUndefined()
  })
})

describe('stripHtml', () => {
  it('enlève les balises HTML et garde le texte', () => {
    expect(stripHtml('<p>Hello <strong>world</strong></p>')).toBe('Hello world')
  })

  it('remplace les retours à la ligne et les espaces en trop par un seul espace', () => {
    expect(stripHtml('<ol>\n<li>One</li>\n<li>Two</li>\n</ol>\n')).toBe('One Two')
  })
})

describe('toExercise', () => {
  it("transforme un exercice de l'API en Exercise simple", () => {
    const expected: Exercise = {
      id: 20,
      name: 'Arnold Shoulder Press',
      category: 'Shoulders',
      muscles: ['Shoulders'],
      secondaryMuscles: ['Triceps brachii'],
      equipment: ['Dumbbell'],
      description: 'Sit on a bench. Press the dumbbells.',
      imageUrl: 'https://wger.de/image-1.png',
    }
    expect(toExercise(apiExercise)).toEqual(expected)
  })

  it("met imageUrl à null quand l'exercice n'a pas d'image", () => {
    const exercise = toExercise({ ...apiExercise, images: [] })
    expect(exercise?.imageUrl).toBeNull()
  })

  it("renvoie null quand l'exercice n'a pas de traduction anglaise", () => {
    const exercise = toExercise({
      ...apiExercise,
      translations: [{ name: 'Kniebeuge', description: '', language: 1 }],
    })
    expect(exercise).toBeNull()
  })
})

describe('findExerciseById', () => {
  const exercises: Exercise[] = [
    {
      id: 1,
      name: 'Bench Press',
      category: 'Chest',
      muscles: [],
      secondaryMuscles: [],
      equipment: [],
      description: '',
      imageUrl: null,
    },
    {
      id: 2,
      name: 'Squat',
      category: 'Legs',
      muscles: [],
      secondaryMuscles: [],
      equipment: [],
      description: '',
      imageUrl: null,
    },
  ]

  it("trouve l'exercice avec l'id de l'adresse (un texte)", () => {
    expect(findExerciseById(exercises, '2')?.name).toBe('Squat')
  })

  it("renvoie undefined quand l'id n'existe pas", () => {
    expect(findExerciseById(exercises, '999')).toBeUndefined()
  })
})
