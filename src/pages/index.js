import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Mydescription from "../components/mydescription"
import MySkills from "../components/myskills"
import MyWorks from "../components/myworks"

export const query = graphql`
  query IndexQuery {
    allStrapiProjects(filter: { Activo: { eq: true } }) {
      edges {
        node {
          id
          name_project
          url_project
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
  return (
    <>
      <SEO title="Home" />
      <Mydescription />
      <MySkills infoSkills={data.allStrapiSkills} />
      <MyWorks infoWorks={data.allStrapiProjects} />
    </>
  )
}

export default IndexPage
