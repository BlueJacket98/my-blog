import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from '../components/projects';
import { graphql, useStaticQuery } from "gatsby"
import BackgroundIcon from "!svg-react-loader!../images/Coding.svg?name=BackgroundIcon";

const ProjectsPage = ({data}) => {
  const styles = {
    header: {
      display: "flex",
      flexDirection: "row",
    },
    svg: {
      width: "500px",
      height: "500px",
      margin: "50px auto",
      
    },
  }
  const Icon = BackgroundIcon;
  return (
    <Layout title={data.site.siteMetadata.title}>
    <SEO
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <div style={styles.header}>
      <div style={styles.intro}>
        Hi, checkout some of my repos!
      </div>
      <Icon style={styles.svg} />
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
