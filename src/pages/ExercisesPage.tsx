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

  return (
    <>
      <h1>Gym Exercises Explorer</h1>
      <SearchBar value={searchText} onChange={setSearchText} />
      {visibleExercises.length === 0 ? (
        <p>Aucun exercice ne correspond à « {searchText} ».</p>
      ) : (
        <ExerciseList exercises={visibleExercises} />
      )}
    </>
  )
}

export default ExercisesPage
