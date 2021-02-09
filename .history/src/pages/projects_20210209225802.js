import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from '../components/projects';
import { graphql, useStaticQuery } from "gatsby"


const ProjectsPage = () => {
  const {
    site: {
      siteMetadata: {
        title: {prop},
      },
    },
  } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const siteTitle = prop[0]
  return (
    <Layout title={siteTitle}>
    <SEO
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <Projects />
    </Layout>
  )
}


export default ProjectsPage;
