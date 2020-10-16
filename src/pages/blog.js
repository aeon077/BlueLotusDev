import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head';


const BlogPage = () => {
  const data = useStaticQuery(graphql`
query {
  allContentfulBlogPost (
    sort: {
      fields: publishedDate,
      order: DESC
    }) {
    edges {
      node {
        title
        slug
        publishedDate (formatString:"MMMM Do, YYYY")
      }
    }
  }
}
   `)

  return (
    <>
      <Layout >
        <Head title="Blog" />
        <h1>Blog</h1>
        <hr />
        <div></div>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyles.post} key={edge.node.slug}>
                <h2>{edge.node.title}</h2>
                <p><Link to={`/blog/${edge.node.slug}`}> {'-->'} Read More</Link></p>
                <p>Date: {edge.node.publishedDate}</p>
              </li>
            )
          })}

        </ol>
      </Layout>
    </>
  )
}

export default BlogPage;