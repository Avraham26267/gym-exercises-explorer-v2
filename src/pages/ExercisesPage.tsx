import { useState } from 'react'
import ExerciseList from '../components/ExerciseList'
import SearchBar from '../components/SearchBar'
import type { Exercise } from '../types'
import { filterExercisesByName } from '../utils/exercises'

type ExercisesPageProps = {
  exercises: Exercise[]
}

// La page "/" : la liste de tous les exercices, avec une recherche par nom.
function ExercisesPage({ exercises }: ExercisesPageProps) {
  const [searchText, setSearchText] = useState('')
  const visibleExercises = filterExercisesByName(exercises, searchText)
  const count = visibleExercises.length

  return (
    <>
      <div className="page-header">
        <h1>Find your exercise</h1>
        <p>
          Search by name, then open an exercise to see the muscles it works and
          the equipment you need.
        </p>
      </div>
      <SearchBar value={searchText} onChange={setSearchText} />
      <p className="result-count">
        {count} {count === 1 ? 'exercise' : 'exercises'}
      </p>
      {count === 0 ? (
        <p className="empty">No exercise matches “{searchText}”.</p>
      ) : (
        <ExerciseList exercises={visibleExercises} />
      )}
    </>
  )
}

export default ExercisesPage
