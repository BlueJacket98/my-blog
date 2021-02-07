import React from "react"
import { Link } from "gatsby"
import "../utils/css/newyorker.css"
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
    <li class="headings irvin-heading">
      <h3 class="heading smallest">{props.node.field.slug}</h3>
      <p class="description"><em>{props.node.frontmatter.date}</em></p>
      <div class="specimen">{props.node.frontmatter.title}</div>
    </li>

    <li class="body georgia">
      <div class="specimen">{props.node.frontmatter.description}</div>
    </li>
  </div>
)
