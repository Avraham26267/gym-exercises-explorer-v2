type FavoriteButtonProps = {
  isFavorite: boolean
  onToggle: () => void
}

// Le bouton ★ : plein si l'exercice est en favori, en contour sinon.
function FavoriteButton({ isFavorite, onToggle }: FavoriteButtonProps) {
  return (
    <button
      type="button"
      className={isFavorite ? 'button' : 'button button-outline'}
      onClick={onToggle}
    >
      {isFavorite ? '★ Dans mes favoris' : '☆ Ajouter aux favoris'}
    </button>
  )
}

export default FavoriteButton
