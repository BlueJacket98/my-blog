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
          <span style="color:#4285f4;">H</span>
          <span color="#ea4335">i</span>
          <span color="#fbbc05"> </span>
          <span color="#4285f4">t</span>
          <span color="#34a853">h</span>
          <span color="#ea4335">e</span>
          <span color="#4285f4">r</span>
          <span color="#fbbc05">e</span>
          <span>!</span>
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
