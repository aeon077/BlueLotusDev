import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss'
import Lotus from '../images/lotus-flower.png'

const Header = () => {
    const data = useStaticQuery(graphql`
     query {
  site {
    siteMetadata {
      title
    }
  }
}
    `)

    return (
        <header className={headerStyles.header}>
            <nav className={headerStyles.nav}>
                <div className={headerStyles.logo}>
                    <div className={headerStyles.span}> <img src={Lotus} alt="Lotus Logo" /></div>
                    <div className={headerStyles.span}><Link to="/" className={headerStyles.title}> {data.site.siteMetadata.title}
                    </Link></div>
                </div>
                <ul className={headerStyles.navlist}>
                    <li><Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavitem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavitem} to="/about">About Me</Link></li>
                    <li><Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavitem} to="/contact">Contact</Link></li>
                    <li><Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavitem} to="/blog">Blog</Link></li>
                </ul>
            </nav>

        </header>

    )
}

export default Header;