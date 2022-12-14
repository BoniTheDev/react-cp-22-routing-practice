// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-size"
      />
      <h1 className="logo-heading">Wave</h1>
    </div>
    <ul className="nav-heading-list">
      <li className="nav-list-element">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-list-element">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-list-element">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
