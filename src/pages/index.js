import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import Indexy from './index.module.scss'

const IndexPage = () => {


  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <div className={Indexy.codeBlock}>
        <code>{` const Carolyn = (FullStack Web Developer) =>   {`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return ( making awesome web things`}</code><br />
        <code>&nbsp;&nbsp;{` );`}</code>
        <br />
        <code>{` };`}</code>
      </div>
    </Layout>
  )
}


export default IndexPage;