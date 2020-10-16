import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';




const Contact = () => {

    return (
        <>
            <Layout>
                <Head title="Contact" />
                <div>
                    <h1>Contact me!</h1>
                    <p>Email: Carolyn.schiltz@gmail.com</p>
                    <p>Connect with me on <Link to="https://www.linkedin.com/in/carolynschiltz" target="_blank">LinkedIn</Link></p>
                    <p>Visit my work on <Link to="https://github.com/aeon077" target="_blank">GitHub</Link></p>
                    <p>View my Graphic Design Portfolio on <Link to="https://www.coroflot.com/carolynschiltz" target="_blank">Cloroflot</Link></p>
                </div>
            </Layout>
        </>
    )
}

export default Contact;