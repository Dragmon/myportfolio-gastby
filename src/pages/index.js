import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
/* import Image from "../components/image" */
import SEO from "../components/seo"

export const query = graphql`
  query IndexQuery{
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
              fluid(maxWidth: 500){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log("data: ")
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <section id="works" className="works">
        <div className="titleSection">
          <h2>Mis Proyectos</h2>
        </div>
        <div className="blockWork">
          {data.allStrapiProjects.edges.map(document => (
            <div key={document.node.id} className="gridItem">
              <Img fluid={document.node.featured_image.childImageSharp.fluid} />
              <h3>
                <Link to={`/${document.node.id}`}>{document.node.name_project}</Link>
              </h3>
            </div>
          ))}
        </div>
      </section>
      {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
