import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';


const IndexPage = () => {


  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello, World</h1>
      <h2>I'm Carolyn, a FullStack Developer, living in beautiful Ponte Vedra, Florida.</h2>
      <p><Link to="/about">About me</Link></p>
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
    </Layout>
  )
}


export default IndexPage;