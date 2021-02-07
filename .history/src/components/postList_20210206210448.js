import React from "react"
import { Link } from "gatsby"
import "../utils/css/newyorker.scss"
export default props => (
  <article>
    <div class="thumbnail-img">`url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`</div>
    <div class="ny-description">{props.node.frontmatter.date}</div>
    <Link to={props.node.fields.slug}>
      <div class="ny-tasteful-title">{props.node.frontmatter.title}</div>
      <p class="post-content-body">{props.node.frontmatter.description}</p>
    </Link>
  </article>

)
