import React from "react"
import { Link } from "gatsby"
import "../utils/css/newyorker.scss"
export default props => (
  <article>
    <div class="ny-description">{props.node.frontmatter.date}</div>
    <Link to={props.node.fields.slug}>
      <div class="ny-big-title">{props.node.frontmatter.title}</div>
    </Link>
    <p class="post-content-body">{props.node.frontmatter.description}</p>
  </article>

)
