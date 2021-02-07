import React from "react"
import { Link } from "gatsby"

export default props => (
  <article>
    <Link to={props.node.fields.slug}>
      <div>
        <h2>
          {props.node.frontmatter.title}
        </h2>
        {props.node.frontmatter.date}
        {props.node.frontmatter.description}
        {props.node.frontmatter.thumbnail}
      </div>
    </Link>



  </article>
)
