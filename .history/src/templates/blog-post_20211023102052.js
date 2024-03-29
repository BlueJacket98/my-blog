import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ToC from "../components/toc/toc"
import { useInView, InView } from "react-intersection-observer"
import Img from "gatsby-image"
import Zmage from "react-zmage"
import SEO from "../components/seo"
import "../utils/css/screen.css"
require(`katex/dist/katex.min.css`)
const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const readingTime = require("reading-time")
  const stats = readingTime(post)
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  })
  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
      >
        <header className="post-content-header">
          <h1 className="post-content-title">{post.frontmatter.title}</h1>
        </header>

        {post.frontmatter.description && (
          <p class="post-content-excerpt">{post.frontmatter.description}</p>
        )}

        <div className="post-info">
          <div className="post-info-category">{post.frontmatter.category}</div>
          {post.frontmatter.date && (
            <p className="post-info-date">{post.frontmatter.date}</p>
          )}
          <div className="post-info-stats">{stats.text}</div>
        </div>

        {/* <Zmage src={post.frontmatter.thumbnail.publicURL} /> */}

        {post.frontmatter.thumbnail && (
          <div className="post-content-image">
            <Img
              // className="kg-image"
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
              alt={post.frontmatter.title}
            />
          </div>
        )}

        {/* <div>
          <h2>{`Header inside viewport ${inView}.`}</h2>
        </div> */}

        <div
          ref={ref}
          className="post-content-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className="post-content-footer">
          {/* There are two options for how we display the byline/author-info.
          If the post has more than one author, we load a specific template
          from includes/byline-multiple.hbs, otherwise, we just use the
          default byline. */}
        </footer>
      </article>

      {/* {
        inView ? (
          <ToC headings={post.headings} />
        ) : (
          <ToC className="no-display" headings={post.headings} />
        )
      } */}
    </Layout>
  )
}

export default BlogPostTemplate
// Query publicURL of the thumbnail when you want its path
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      headings {
        value
        depth
      }
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          publicURL
          childImageSharp {
            fluid(maxWidth: 6000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
