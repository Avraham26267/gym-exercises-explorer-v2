import { useState } from 'react'
import { Link } from 'react-router'
import type { Exercise } from '../types'
import { pickRandomExercise } from '../utils/random'

type RandomPageProps = {
  exercises: Exercise[]
}

// La page "/random" : un exercice tiré au hasard, et un bouton pour en tirer un autre.
function RandomPage({ exercises }: RandomPageProps) {
  // La fonction dans useState est appelée une seule fois : le premier tirage.
  const [exercise, setExercise] = useState<Exercise | null>(() =>
    pickRandomExercise(exercises),
  )

  function handleAnotherOne() {
    setExercise(pickRandomExercise(exercises, exercise ? exercise.id : null))
  }

  return (
    <>
      <div className="page-header">
        <h1>🎲 Random exercise</h1>
        <p>Not sure what to train today? Let chance decide.</p>
      </div>

      {exercise === null ? (
        <p className="empty">No exercise to pick from.</p>
      ) : (
        <article className="exercise-details random-card">
          <h2>{exercise.name}</h2>
          <span className="category">{exercise.category}</span>
          {exercise.imageUrl && (
            <img src={exercise.imageUrl} alt={exercise.name} />
          )}
          <p>
            <strong>Main muscles:</strong>{' '}
            {exercise.muscles.length > 0 ? exercise.muscles.join(', ') : 'None'}
          </p>
          <div className="random-actions">
            <button type="button" className="button" onClick={handleAnotherOne}>
              🎲 Another one
            </button>
            <Link
              to={`/exercises/${exercise.id}`}
              className="button button-outline"
            >
              See details →
            </Link>
          </div>
        </article>
      )}
    </>
  )
}

export default RandomPage
