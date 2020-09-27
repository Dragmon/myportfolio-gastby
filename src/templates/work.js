import React from "react"
import { Link, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { ReturnIcon } from "../components/return-icon"

export const query = graphql`
  query workQuery($url_project: String!) {
    strapiProjects(url_project: { eq: $url_project }) {
      id
      name_project
      url_site
      url_project
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
  return (
    <>
      <SEO title={data.strapiProjects.url_project} />
      <section className="contentWork">
        <div className="imgSitio">
          <Img
            fluid={data.strapiProjects.image_website.childImageSharp.fluid}
            alt={data.strapiProjects.name_project}
          />
        </div>
        <div className="infoSitio">
          <div className="positionInfo">
            <Link to="/#works">
              <ReturnIcon />
            </Link>
            <h2>{data.strapiProjects.name_project}</h2>
            <p>{data.strapiProjects.Description_project}</p>
            {data.strapiProjects.url_site ? (
              <OutboundLink
                href={data.strapiProjects.url_site}
                target="_blank"
                rel="noreferrer"
              >
                <button>Visitar sitio</button>
              </OutboundLink>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default workTemplate
