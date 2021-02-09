import React from "react"
import { Link } from "gatsby"
import "../utils/css/newyorker.scss"
import Img from "gatsby-image"
require(`katex/dist/katex.min.css`)
export default props => (
  <Link to={props.node.fields.slug} className="content-list-div">
    {props.node.frontmatter.thumbnail && (
      <Img
        className="content-list-thumbnail"
        fluid={props.node.frontmatter.thumbnail.childImageSharp.fluid}
        alt={props.node.frontmatter.title}
      />
    )}
    <div className="content-list-text-block">
      <div class="content-list-title">{props.node.frontmatter.title}</div>
      <div class="content-list-description">{props.node.frontmatter.description}</div>
      <div class="content-list-read-more"> Read More »</div>
    </div>
  </Link>

)
