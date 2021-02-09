import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from '../components/projects';
import { graphql, useStaticQuery } from "gatsby"



export default () => (
  <Layout>
  <SEO
    title="All posts"
    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
  />
  <Projects />
  </Layout>
);
