import React from "react"
import "./style.css"

const ToC = ({ headings }) => (
  <div style={contentBlockStyle}>
    <h2 style={contentTitleStyle}>Contents</h2>
    <div style={contentInnerBlockStyle}>
      {headings.map(heading => {
        if (heading.depth > 4) {
          return <div />
        }

        return (
          <div key={heading.value}>
            <a
              href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {heading.value}
            </a>
          </div>
        )
      })}
    </div>
  </div>
)

const contentBlockStyle = {
  'width': '18vw',
  'left': '0',
  'top': '80px',
  'maxHeight': '45vh',
  'left': '10px',
  'top': '0',
  'position': 'fixed'
}

const contentInnerBlockStyle = {
  'scrollbar-width': 'thin',
  'scrollbar-color': '#367ee9',
  'overflow': 'hidden',
}


const contentTitleStyle = {
  
}


export default ToC
