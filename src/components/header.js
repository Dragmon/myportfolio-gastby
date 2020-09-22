/*import PropTypes from "prop-types" */
import React from "react"
import { Link } from "gatsby"
import logo from "../images/Logo.png"
import iconoMenu from "../images/iconos/icono-menu.png"
import "../styles/header.scss"

const Header = () => (
  <header>
    <div className="contHeader">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Carlos Pérez" />
        </Link>
      </div>
      <nav className="menu">
        {/* <span className="fas fa-bars">
        </span> */}
        <img src={iconoMenu} alt="Menú" />
        <ul>
          <li>
            <Link to="/#myInfomation"> Sobre mi </Link>
          </li>
          <li>
            <Link to="/#skills"> Skills </Link>
          </li>
          <li>
            <Link to="/#works"> Mis Proyectos </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
