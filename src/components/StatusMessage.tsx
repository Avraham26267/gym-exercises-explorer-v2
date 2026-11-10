type StatusMessageProps = {
  loading: boolean
  error: string | null
}

// Affiche « Loading… » pendant l'attente, ou le message d'erreur si ça a échoué.
function StatusMessage({ loading, error }: StatusMessageProps) {
  if (loading) {
    return <p className="status">Loading…</p>
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
