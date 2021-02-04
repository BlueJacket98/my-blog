import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Intro, Skills, Contact, Projects } from "components/landing"

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)
