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
    <p>{props.node.frontmatter.title}</p>
    <p>{props.node.frontmatter.date}</p>
    <p>{props.node.frontmatter.description}</p>
  </div>
  
)