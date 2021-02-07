import React from "react"
import { Link } from "gatsby"

export default props => (
  // <article>
  //   <Link to={props.node.fields.slug}>
  //     <div>
  //       <h2>
  //         {props.node.frontmatter.title}
  //       </h2>
  //       {props.node.frontmatter.date}
  //       {props.node.frontmatter.description}
  //     </div>
  //   </Link>
  // </article>
  <div>
    <dt>{props.node.frontmatter.title}</dt>
    <dd>{props.node.frontmatter.date}</dd>
    <dd>{props.node.frontmatter.description}</dd>
    <br></br>
  </dl>
)
