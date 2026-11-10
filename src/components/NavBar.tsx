import { Link, NavLink } from 'react-router'

// Le menu en haut de chaque page. NavLink ajoute la classe "active" sur la page ouverte.
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        💪 Gym Exercises Explorer
      </Link>
      <div className="navbar-links">
        <NavLink to="/" end>
          Exercises
        </NavLink>
        <NavLink to="/favorites">★ Favorites</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
