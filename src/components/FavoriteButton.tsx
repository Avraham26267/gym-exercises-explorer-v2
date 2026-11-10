type FavoriteButtonProps = {
  isFavorite: boolean
  onToggle: () => void
}

// Le bouton ★ : étoile pleine si l'exercice est en favori, étoile vide sinon.
function FavoriteButton({ isFavorite, onToggle }: FavoriteButtonProps) {
  return (
    <button type="button" className="favorite-button" onClick={onToggle}>
      {isFavorite ? '★ Retirer des favoris' : '☆ Ajouter aux favoris'}
    </button>
  )
}

export default FavoriteButton
