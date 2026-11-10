type StatusMessageProps = {
  loading: boolean
  error: string | null
}

// Affiche « Chargement… » pendant l'attente, ou le message d'erreur si ça a échoué.
function StatusMessage({ loading, error }: StatusMessageProps) {
  if (loading) {
    return <p className="status">Chargement…</p>
  }
  if (error) {
    return (
      <p className="status status-error" role="alert">
        {error}
      </p>
    )
  }
  return null
}

export default StatusMessage
