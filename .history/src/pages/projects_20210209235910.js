import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from '../components/projects';
import { graphql, useStaticQuery } from "gatsby"
import BackgroundIcon from "!svg-react-loader!../images/Coding.svg?name=BackgroundIcon";

const ProjectsPage = ({data}) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
    <SEO
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
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
