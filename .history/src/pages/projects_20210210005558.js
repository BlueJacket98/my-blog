import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from '../components/projects';
import { graphql, useStaticQuery } from "gatsby"
import BackgroundIcon from "!svg-react-loader!../images/Coding.svg?name=BackgroundIcon";
import "../utils/css/projects-styles.scss"

const ProjectsPage = ({data}) => {
  const Icon = BackgroundIcon;
  return (
    <Layout title={data.site.siteMetadata.title}>
    <SEO
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <div className="header">
      <div className="intro">
        <div className="line1">
          <span className="blue">H</span>
          <span className="red">i</span>
          <span className="yellow"> </span>
          <span className="blue">t</span>
          <span className="green">h</span>
          <span className="red">e</span>
          <span className="blue">r</span>
          <span className="yellow">e</span>
          <span className="green">!</span>
          Hi there!
        </div>
        <div className="line2">
          Checkout some of my repos.
        </div>
      </div>
      <Icon className="svg" />
    </div>
    
    <Projects />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`



export default ProjectsPage;
