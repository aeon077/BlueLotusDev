import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';


const About = () => {

    return (
        <>
            <Layout>
                <Head title="About" />
                <div>
                    <h1>Hi, I'm Carolyn.</h1>

                    <p>I am a Fullstack Web Developer and Graphic Designer.</p>
                    <p>Want to work with me?<Link to="/contact">Contact me.</Link></p>
                </div>
            </Layout>
        </>
    )
}

export default About;