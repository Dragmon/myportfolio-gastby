import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/Logo.png"
import "../styles/header.scss"

const Header = () => {
  const [openMenu, updateMenu] = useState(false)
  return (
    <header>
      <div className={`contHeader ${openMenu ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo Carlos Pérez" />
          </Link>
        </div>
        <div
          className="menu2"
          onClick={() => {
            updateMenu(!openMenu)
          }}
        >
          <span></span>
        </div>
        <nav className="listMenu">
          <ul
            onClick={() => {
              updateMenu(!openMenu)
            }}
          >
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
        {/*  <nav className="menu">
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
      </nav> */}
      </div>
    </header>
  )
}

export default Header
