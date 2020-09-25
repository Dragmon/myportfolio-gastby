import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Mydescription from "../components/mydescription"

export const query = graphql`
  query IndexQuery {
    allStrapiProjects {
      edges {
        node {
          id
          name_project
          Description_project
          featured_image {
            absolutePath
            childImageSharp {
              id
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    allStrapiSkills {
      edges {
        node {
          id
          name_skill
          image_skill {
            extension
            publicURL
            childImageSharp {
              fixed(width: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  /*   console.log("data: ")
    console.log(data) */
  return (
    <>
      <SEO title="Home" />
      <Mydescription />
      {/* ============= Section Skills ============= */}
      <section id="skills" className="skills">
        <div className="titleSection">
          <h2>Skills</h2>
        </div>
        <div className="blockSkills">
          {data.allStrapiSkills.edges.map(document => (
            <div key={document.node.id} className="imageSkill">
              {/* <Img fluid={document.node.image_skill.childImageSharp.fluid} /> */}
              {/* <Img
                fixed={document.node.image_skill.childImageSharp.fixed}
                alt={document.node.name_skill}
              /> */}
              <img
                src={document.node.image_skill.publicURL}
                alt={document.node.name_skill}
              />
            </div>
          ))}
        </div>
      </section>
      {/* ============= Section Work ============= */}
      <section id="works" className="works">
        <div className="titleSection">
          <h2>Mis Proyectos</h2>
        </div>
        <div className="blockWork">
          {data.allStrapiProjects.edges.map(document => (
            <div key={document.node.id} className="gridItem">
              <Link to={`/${document.node.name_project}`}>
                <Img
                  fluid={document.node.featured_image.childImageSharp.fluid}
                  alt={document.node.name_project}
                />
                <h3>{document.node.name_project}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default IndexPage
