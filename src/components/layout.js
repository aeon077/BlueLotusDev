import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss'

const Layout = (props) => {

    return (
        <>
            <div className={layoutStyles.content}>
                <div className={layoutStyles.container}>
                    <Header />
                    {props.children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout