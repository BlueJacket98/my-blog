import React from "react"
import { Link } from "gatsby"

export default props => (
  <article>
    {/* <Link to={props.node.fields.slug}>
      <div>
        <h2>
          {props.node.frontmatter.title}
        </h2>
        {props.node.frontmatter.date}
        {props.node.frontmatter.description}
      </div>
    </Link> */}
    <li>
      <img src="http://lorempixum.com/100/100/nature/3" >
      <h3>Smoke On The Water</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
    </li>


  </article>
)
