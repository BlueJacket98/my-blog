import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import tocbot from 'tocbot'
import SEO from "../components/seo"
require(`katex/dist/katex.min.css`)
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    function makeIds () {
      var content = document.querySelector('.js-toc-content')
      var headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6, h7')
      var headingMap = {}
    
      Array.prototype.forEach.call(headings, function (heading) {
        var id = heading.id ? heading.id : heading.textContent.trim().toLowerCase()
          .split(' ').join('-').replace(/[!@#$%^&*():]/ig, '').replace(/\//ig, '-')
        headingMap[id] = !isNaN(headingMap[id]) ? ++headingMap[id] : 0
        if (headingMap[id]) {
          heading.id = id + '-' + headingMap[id]
        } else {
          heading.id = id
        }
      })
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
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

          {post.frontmatter.date && (
            <p class="post-content-date">{post.frontmatter.date}</p>
          )}

          {/* {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )} */}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
            If the post has more than one author, we load a specific template
            from includes/byline-multiple.hbs, otherwise, we just use the
            default byline. */}
          </footer>
          {makeIds ()}
          <div>
            {tocbot.init({
              // Where to render the table of contents.
              tocSelector: '.js-toc',
              // Where to grab the headings to build the table of contents.
              contentSelector: '.js-toc-content',
              // Which headings to grab inside of the contentSelector element.
              headingSelector: 'h1, h2, h3',
              // For headings inside relative or absolute positioned containers within content.
              hasInnerContainers: true,
            })}
          </div>
          
        </article>
      </Layout>
      
    )
  }
}

export default BlogPostTemplate

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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
