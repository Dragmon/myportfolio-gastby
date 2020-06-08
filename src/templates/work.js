import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import iconReturn from "../images/iconos/icono-return.png"

export const query = graphql`
  query workQuery($id: String!){
    strapiProjects(id: {eq: $id}){
      id
      name_project
      url_site
      Description_project
      image_website {
        childImageSharp {
          id
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const workTemplate = ({ data }) => {
  console.log("data template")
  console.log(data)
  return (
    <Layout>
      <SEO title={data.strapiProjects.name_project} />
      <section className="contentWork">
        <div className="imgSitio">
          <Img fluid={data.strapiProjects.image_website.childImageSharp.fluid} alt={data.strapiProjects.name_project} />
        </div>
        <div className="infoSitio">
          <Link to="/">
            <img src={iconReturn} className="linkHome" alt="return" />
          </Link>
          <div className="positionInfo">
            <h2>
              {data.strapiProjects.name_project}
            </h2>
            <p>
              {data.strapiProjects.Description_project}
            </p>
            <a href={data.strapiProjects.url_site} target="_blank" rel="noreferrer">
              <button>
                Visitar sitio
            </button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default workTemplate;

