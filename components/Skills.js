import React from 'react'

const skills = [
  {
    title: "JavaScript",
    percentage: "100",
    color: "#f44336"
  },
  {
    title: "NodeJS",
    percentage: "86",
    color: "#4caf50"
  },
  {
    title: "Photoshop",
    percentage: "68",
    color: "#2196f3"
  },
  {
    title: "CSS",
    percentage: "100",
    color: "#7e57c2"
  },
  {
    title: "HTML",
    percentage: "100",
    color: "#ff5722"
  },
  {
    title: "WordPress",
    percentage: "60",
    color: "#555555"
  },
  {
    title: "React",
    percentage: "60",
    color: "#2dd2ff"
  },
  {
    title: "PHP",
    percentage: "60",
    color: "#9e9e9e"
  },
  {
    title: "Inglês",
    percentage: "41",
    color: "#607d8b"
  },
  {
    title: "SQL",
    percentage: "40",
    color: "#fdd835"
  },
]

const others = [
  'Bootstrap', 'Mocha', 'Gulp', 'Git', 'Layout responsivo', 'Mobile first', 'PWA'
]

export default (props) => {
  return (
    <section id="skills">
      <center>
        <h2 className="section-title">Habilidades</h2>
        <div className="skill-table">
          {skills.map((item, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-label" style={{background: item.color}}>{item.title}</div>
              <div className="skill-level-bar"><span style={{
                background: item.color,
                width: `${item.percentage}%`
              }}></span></div>
            </div>
          ))}

          <div className="other-skills">
            {others.map((_, i) => (
              <div key={i} className="skill-label">{_}</div>
            ))}
          </div>
        </div>
      </center>
    </section>
  )
}