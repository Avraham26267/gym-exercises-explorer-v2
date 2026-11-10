// Un exercice, tel que l'appli l'utilise.
export type Exercise = {
  id: number
  name: string
  category: string
  muscles: string[]
  secondaryMuscles: string[]
  equipment: string[]
  description: string
  imageUrl: string | null
}

// Les données brutes envoyées par l'API wger (seulement les champs qu'on utilise).
export type ApiNamedItem = {
  id: number
  name: string
}

export type ApiMuscle = {
  id: number
  name: string
  name_en: string
}

export type ApiTranslation = {
  name: string
  description: string
  language: number
}

export type ApiImage = {
  image: string
  is_main: boolean
}

export type ApiExercise = {
  id: number
  category: ApiNamedItem
  muscles: ApiMuscle[]
  muscles_secondary: ApiMuscle[]
  equipment: ApiNamedItem[]
  images: ApiImage[]
  translations: ApiTranslation[]
}

// La réponse de l'API : une page de résultats.
export type ApiExerciseResponse = {
  count: number
  results: ApiExercise[]
}
