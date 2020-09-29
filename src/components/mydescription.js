import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import iconLinkedin from "../images/iconos/icono-linkedin.png"
import iconGithub from "../images/iconos/icono-github.png"
import iconEmail from "../images/iconos/icono-correo.png"
import "../styles/myDescription.scss"

const myDescription = () => (
  <section id="myInfomation" className="myInfomation">
    <div className="contInfo">
      <h1>CARLOS GERARDO PÉREZ HORTA</h1>
      <h2>Software Developer especialista en Frontend</h2>
      <p>
        Front-End Developer con más de 4 años de experiencia en el rubro del
        marketing digital, en busca de nuevos retos que me permitan crecer
        profesionalmente, aprendiendo de forma autodidacta y de las personas en
        el entorno laboral.
      </p>
      <div className="contact">
        <OutboundLink
          href="https://www.linkedin.com/in/charliegperez/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconLinkedin} alt="Link Linkedin" />
        </OutboundLink>
        <OutboundLink href="mailto: carlos.perez@charliegperez.com">
          <img src={iconEmail} alt="Link email" />
        </OutboundLink>
        <OutboundLink
          href="https://github.com/Dragmon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconGithub} alt="Link github" />
        </OutboundLink>
      </div>
    </div>
  </section>
)

export default myDescription
