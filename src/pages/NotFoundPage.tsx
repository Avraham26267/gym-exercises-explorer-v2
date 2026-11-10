import { Link } from 'react-router'

// La page "*" : pour toutes les adresses qui n'existent pas.
function NotFoundPage() {
  return (
    <>
      <h1>Page introuvable</h1>
      <Link to="/">Retour à la liste</Link>
    </>
  )
}

export default NotFoundPage
