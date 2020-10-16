import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
query {
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          date
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
}
   `)

  return (
    <>
      <Layout >
        <h1>Blog</h1>
        <hr />

        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className={blogStyles.post} key={edge.node.fields.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p><Link to={`/blog/${edge.node.fields.slug}`}> {'-->'} Read More</Link></p>
                <p>Date: {edge.node.frontmatter.date}</p>
                <p>Time to read: {edge.node.timeToRead} minute</p>
              </li>
            )
          })}

          {/* <div>{data.allMarkdownRemark.edges.node.html}</div> */}
        </ol>
      </Layout>
    </>
  )
}

export default BlogPage;