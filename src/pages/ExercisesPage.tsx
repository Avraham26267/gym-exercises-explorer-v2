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
      <div className="page-header">
        <h1>Exercices</h1>
        <p>
          Clique sur un exercice pour voir ses muscles et son matériel.
          {` ${visibleExercises.length} exercice(s) affiché(s).`}
        </p>
      </div>
      <SearchBar value={searchText} onChange={setSearchText} />
      {visibleExercises.length === 0 ? (
        <p className="empty">Aucun exercice ne correspond à « {searchText} ».</p>
      ) : (
        <ExerciseList exercises={visibleExercises} />
      )}
    </>
  )
}

export default ExercisesPage
