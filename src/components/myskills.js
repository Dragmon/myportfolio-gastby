import React from "react"
import "../styles/skills.scss"

const mySkills = data => {
  return (
    <section id="skills" className="skills">
      <div className="contSkills">
        <div className="titleSection">
          <h2>Skills</h2>
        </div>
        <div className="blockSkills">
          {data.infoSkills.edges.map(document => (
            <div key={document.node.id} className="imageSkill">
              <img
                src={document.node.image_skill.publicURL}
                alt={document.node.name_skill}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default mySkills
