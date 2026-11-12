type StatusMessageProps = {
  loading: boolean
  error: string | null
  // La fonction à appeler quand on clique sur « Try again » (facultative).
  onRetry?: () => void
}

// Affiche « Loading… » pendant l'attente, ou le message d'erreur si ça a échoué.
function StatusMessage({ loading, error, onRetry }: StatusMessageProps) {
  if (loading) {
    return <p className="status">Loading…</p>
  }
  if (error) {
    return (
      <div className="status">
        <p className="status-error" role="alert">
          {error}
        </p>
        {onRetry && (
          <button type="button" className="button retry-button" onClick={onRetry}>
            Try again
          </button>
        )}
      </div>
    )
  }
  return null
}

export default StatusMessage
