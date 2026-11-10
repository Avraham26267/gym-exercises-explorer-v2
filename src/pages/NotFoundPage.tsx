import { Link } from 'react-router'

// La page "*" : pour toutes les adresses qui n'existent pas.
function NotFoundPage() {
  return (
    <div className="empty">
      <h1>Page not found</h1>
      <p>This address does not exist in the app.</p>
      <Link to="/" className="button">
        Back to the list
      </Link>
    </div>
  )
}

export default NotFoundPage
