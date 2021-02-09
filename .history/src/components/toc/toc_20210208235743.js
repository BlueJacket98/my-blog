import React from "react"
import "./style.css"

const ToC = ({ headings }) => (
  <div class="content-block">
    <h2 class="content-title">Contents</h2>
    <div class="content-inner-block">
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




export default ToC
