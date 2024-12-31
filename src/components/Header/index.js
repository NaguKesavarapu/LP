import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <Link to="/">
        <img
          src="https://i.im.ge/2024/12/31/zZax1X.WhatsApp-Image-2024-12-30-at-23-11-45-1.jpeg"
          className="logo"
          alt="wave"
        />
      </Link>
      <p className="name">Pravallika(Gretest Of All the Time)</p>
    </div>
    <ul className="list-container">
      <li className="nav-link">
        <Link to="/" className="nav-link">
          Identity overview
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/about" className="nav-link">
          Her Grace
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/contact" className="nav-link">
          Her Melody
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
