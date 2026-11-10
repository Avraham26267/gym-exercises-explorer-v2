import type { ApiExercise, ApiMuscle, ApiTranslation, Exercise } from '../types'

// Dans l'API wger, l'anglais a le numéro de langue 2.
const ENGLISH = 2

// Trouve la traduction anglaise d'un exercice (ou undefined s'il n'y en a pas).
export function findEnglishTranslation(
  translations: ApiTranslation[],
): ApiTranslation | undefined {
  return translations.find((translation) => translation.language === ENGLISH)
}

// Enlève les balises HTML (<p>, <li>…) et garde seulement le texte.
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Le nom anglais simple du muscle s'il existe (ex. « Quads »), sinon son nom latin.
function muscleName(muscle: ApiMuscle): string {
  return muscle.name_en !== '' ? muscle.name_en : muscle.name
}

// Transforme un exercice brut de l'API en Exercise simple.
// Renvoie null si l'exercice n'a pas de traduction anglaise.
export function toExercise(apiExercise: ApiExercise): Exercise | null {
  const english = findEnglishTranslation(apiExercise.translations)
  if (!english) {
    return null
  }

  const mainImage =
    apiExercise.images.find((image) => image.is_main) ?? apiExercise.images[0]

  return {
    id: apiExercise.id,
    name: english.name,
    category: apiExercise.category.name,
    muscles: apiExercise.muscles.map(muscleName),
    secondaryMuscles: apiExercise.muscles_secondary.map(muscleName),
    equipment: apiExercise.equipment.map((item) => item.name),
    description: stripHtml(english.description),
    imageUrl: mainImage ? mainImage.image : null,
  }
}

// Trouve un exercice par son id (l'id de l'adresse est un texte, d'où String()).
export function findExerciseById(
  exercises: Exercise[],
  id: string | undefined,
): Exercise | undefined {
  return exercises.find((exercise) => String(exercise.id) === id)
}

// Garde seulement les exercices dont le nom contient le texte cherché.
// Majuscules et minuscules comptent pareil. Un texte vide garde toute la liste.
export function filterExercisesByName(
  exercises: Exercise[],
  searchText: string,
): Exercise[] {
  const search = searchText.trim().toLowerCase()
  if (search === '') {
    return exercises
  }
  return exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search),
  )
}
