import React from "react"
import { Link } from "gatsby"
import "../utils/css/newyorker.scss"
import Img from "gatsby-image"
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
      <p class="content-list-description">{props.node.frontmatter.description}</p>
      <p class="content-list-read-more"> Read More »</p>
    </div>
  </Link>

)
