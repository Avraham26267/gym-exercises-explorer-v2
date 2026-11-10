import { Link } from 'react-router'

// La page "*" : pour toutes les adresses qui n'existent pas.
function NotFoundPage() {
  return (
    <div className="empty">
      <h1>Page introuvable</h1>
      <p>Cette adresse n'existe pas dans l'appli.</p>
      <Link to="/" className="button">
        Retour à la liste
      </Link>
    </div>
  )
}

export default NotFoundPage
