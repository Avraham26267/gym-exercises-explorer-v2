import { NavLink } from 'react-router'

// Le menu en haut de chaque page. NavLink ajoute la classe "active" sur la page ouverte.
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Exercices
      </NavLink>
    </nav>
  )
}

export default NavBar
