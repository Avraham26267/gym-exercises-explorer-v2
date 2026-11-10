// @vitest-environment jsdom
// Ces tests affichent de vrais composants dans un faux navigateur (jsdom),
// puis tapent et cliquent dedans comme un utilisateur.
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ExercisesPage from '../pages/ExercisesPage'
import type { Exercise } from '../types'
import ExerciseCard from './ExerciseCard'
import FavoriteButton from './FavoriteButton'
import StatusMessage from './StatusMessage'

// Après chaque test, on vide la page pour que les tests ne se mélangent pas.
afterEach(cleanup)

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

const exercises = [
  makeExercise(1, 'Biceps Curl'),
  makeExercise(2, 'Hammer Curl'),
  makeExercise(3, 'Bench Press'),
]

describe('ExercisesPage + SearchBar', () => {
  // Les liens (Link) ont besoin d'un routeur : MemoryRouter en est un qui marche sans navigateur.
  function renderPage() {
    render(
      <MemoryRouter>
        <ExercisesPage exercises={exercises} />
      </MemoryRouter>,
    )
  }

  it('affiche tous les exercices au départ', () => {
    renderPage()
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('filtre la liste quand on tape « curl », puis la remet quand on efface', async () => {
    const user = userEvent.setup()
    renderPage()
    const input = screen.getByLabelText('Search an exercise')

    await user.type(input, 'curl')
    expect(screen.getByText('Biceps Curl')).toBeTruthy()
    expect(screen.getByText('Hammer Curl')).toBeTruthy()
    expect(screen.queryByText('Bench Press')).toBeNull()
    expect(screen.getByText('2 exercises')).toBeTruthy()

    await user.clear(input)
    expect(screen.getByText('Bench Press')).toBeTruthy()
  })

  it("affiche un message quand aucun exercice ne correspond", async () => {
    const user = userEvent.setup()
    renderPage()
    await user.type(screen.getByLabelText('Search an exercise'), 'deadlift')
    expect(screen.getByText('No exercise matches “deadlift”.')).toBeTruthy()
  })
})

describe('FavoriteButton', () => {
  it("affiche « Add to favorites » quand l'exercice n'est pas en favori", () => {
    render(<FavoriteButton isFavorite={false} onToggle={() => {}} />)
    expect(screen.getByRole('button').textContent).toBe('☆ Add to favorites')
  })

  it("affiche « In my favorites » quand l'exercice est en favori", () => {
    render(<FavoriteButton isFavorite={true} onToggle={() => {}} />)
    expect(screen.getByRole('button').textContent).toBe('★ In my favorites')
  })

  it('appelle onToggle quand on clique', async () => {
    const user = userEvent.setup()
    // vi.fn() est une fausse fonction qui retient combien de fois elle a été appelée.
    const onToggle = vi.fn()
    render(<FavoriteButton isFavorite={false} onToggle={onToggle} />)
    await user.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})

describe('StatusMessage', () => {
  it('affiche « Loading… » pendant le chargement', () => {
    render(<StatusMessage loading={true} error={null} />)
    expect(screen.getByText('Loading…')).toBeTruthy()
  })

  it("affiche le message d'erreur", () => {
    render(<StatusMessage loading={false} error="Network error" />)
    expect(screen.getByRole('alert').textContent).toBe('Network error')
  })
})

describe('ExerciseCard', () => {
  it("mène à la page de détails de l'exercice", () => {
    render(
      <MemoryRouter>
        <ExerciseCard exercise={makeExercise(42, 'Squat')} />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link').getAttribute('href')).toBe('/exercises/42')
  })
})
