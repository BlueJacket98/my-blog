import React from "react"
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
// import { graphql, StaticQuery } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import PostList from "../components/postList"

// // import "../utils/global.scss"
// import "../utils/normalize.css"
// import "../utils/css/screen.css"
// //TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
// const BlogIndex = ({ data }, location) => {
//   const siteTitle = data.site.siteMetadata.title
//   const posts = data.allMarkdownRemark.edges
//   let postCounter = 0

//   return (
//     <Layout title={siteTitle}>
//       <SEO
//         title="All posts"
//         keywords={[`blog`, `gatsby`, `javascript`, `react`]}
//       />
//       {/* <Bio /> */}
//       {data.site.siteMetadata.description && (
//         <header className="page-head">
//           <h2 className="page-head-title">
//             {data.site.siteMetadata.description}
//           </h2>
//         </header>
//       )}
//       {/* <div className="post-feed">
//         {posts.map(({ node }) => {
//           postCounter++
//           return (
//             <PostList
//               key={node.fields.slug}
//               count={postCounter}
//               node={node}
//               postClass={`post`}
//             />
//           )
//         })}
//       </div> */}
//       <PostList />
//     </Layout>
//   )
// }

// const indexQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//             thumbnail {
//               childImageSharp {
//                 fluid(maxWidth: 1360) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default props => (
//   <StaticQuery
//     query={indexQuery}
//     render={data => (
//       <BlogIndex location={props.location} props data={data} {...props} />
//     )}
//   />
// )



const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default props => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
)