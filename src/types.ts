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
