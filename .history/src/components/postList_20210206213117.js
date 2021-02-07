import React from "react"
import { Link } from "gatsby"
import "../utils/css/newyorker.scss"
import Img from "gatsby-image"
export default props => (
  <div className="content-list-div">
    {props.node.frontmatter.thumbnail && (
      <div className="content-list-thumbnail">
        <Img
          className="kg-image"
          fluid={props.node.frontmatter.thumbnail.childImageSharp.fluid}
          alt={props.node.frontmatter.title}
        />
      </div>
    )}
    <Link to={props.node.fields.slug}>
      <div class="ny-tasteful-title">{props.node.frontmatter.title}</div>
      <p class="post-content-body">{props.node.frontmatter.description}</p>
    </Link>
  </div>

)
