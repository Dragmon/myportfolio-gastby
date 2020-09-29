import React from "react"
import { Link } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import Img from "gatsby-image"
import "../styles/works.scss"

const myWorks = data => {
  return (
    <section id="works" className="works">
      <div className="contWorks">
        <div className="titleSection">
          <h2>Mis Proyectos</h2>
        </div>
        <div className="blockWork">
          {data.infoWorks.edges.map(document => (
            <div key={document.node.id} className="gridItem">
              <Link
                to={`/${document.node.url_project}`}
                onClick={e => {
                  trackCustomEvent({
                    category: "My work",
                    action: "Click",
                    label: `${document.node.name_project}`,
                    value: `${document.node.id}`,
                  })
                }}
              >
                <Img
                  fluid={document.node.featured_image.childImageSharp.fluid}
                  alt={document.node.name_project}
                />
                <h3>{document.node.name_project}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default myWorks
