import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from '../components/projects';

export default () => (
  <Layout title={siteTitle}>
  <SEO
    title="All posts"
    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
  />
  <Projects />
  </Layout>
);
