import type { Exercise } from '../types'

// Tire un exercice au hasard dans la liste.
// - currentId : l'exercice déjà affiché, pour ne pas retomber dessus quand on clique « Another one ».
// - random : la fonction qui donne un nombre entre 0 et 1 (Math.random par défaut).
//   On peut la remplacer dans les tests pour avoir un résultat connu d'avance.
export function pickRandomExercise(
  exercises: Exercise[],
  currentId: number | null = null,
  random: () => number = Math.random,
): Exercise | null {
  // S'il y a plus d'un exercice, on enlève celui qui est déjà affiché.
  const choices =
    exercises.length > 1
      ? exercises.filter((exercise) => exercise.id !== currentId)
      : exercises

  if (choices.length === 0) {
    return null
  }

  // random() donne un nombre entre 0 et 1 → on le transforme en position dans la liste.
  const index = Math.floor(random() * choices.length)
  return choices[index]
}
