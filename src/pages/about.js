import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const About = () => {

    return (
        <>
            <Layout>
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