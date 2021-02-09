import React from "react"
import "../../utils/css/toc-styles.scss"

const ToC = ({ headings }) => (
  <div class="content-block">
    <div class="content-title">Contents</div>
    <div class="content-inner-block">
      {headings.map(heading => {
        if (heading.depth > 4) {
          return <div />
        }

        return (
          <div class="content-item" key={heading.value}>
            <a class="content-link" 
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
