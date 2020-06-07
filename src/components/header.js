/* import { Link } from "gatsby"
import PropTypes from "prop-types" */
import React from "react"
import logo from "../images/Logo.png"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    <div className="contHeader">
      <div className="logo">
        <img src={logo} alt="Logo Carlos Pérez" />
      </div>
      <nav className="menu">
        <span className="fas fa-bars">
        </span>
        <ul>
          <li> <a href="#myInfomation">Sobre mi </a></li>
          <li> <a href="#skills">Skills</a></li>
          <li> <a href="#works">Mi trabajo</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

/* Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
} */

export default Header
