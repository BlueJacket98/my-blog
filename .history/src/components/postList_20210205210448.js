import React from "react"
import { Link } from "gatsby"

export default props => (
  <article>
    <Link to={props.node.fields.slug}>
      <div>
        <h2>
          {props.node.frontmatter.title}
          {props.node.frontmatter.date}
          {props.node.frontmatter.description}
        </h2>
        
      </div>
    </Link>



  </article>
)
