// Import Navbar css
import "./Navbar.css"

// Export Navbar function JSX and render HTML
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  )
}
