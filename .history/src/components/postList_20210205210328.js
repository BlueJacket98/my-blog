import React from "react"
import { Link } from "gatsby"

export default props => (
  <article>
    <Link to={props.node.fields.slug} className="post-card-link">
      <div>
        <h2>
          {props.node.frontmatter.title}
        </h2>
        <br></br>
      </div>
    </Link>



  </article>
)
