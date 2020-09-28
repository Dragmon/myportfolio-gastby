import React from "react"
import SEO from "../components/seo"
import spartant from "../images/spartanHalo.png"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section className="page404">
      <h1>NOT FOUND</h1>
      <p>La liga que usted visito no existe, favor de verificarlo</p>
      <div className="images404">
        <img src={spartant} alt="Spartan Halo" />
      </div>
    </section>
  </>
)

export default NotFoundPage
