import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss'

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
            <h1> <Link to="/" className={headerStyles.title}>
                {data.site.siteMetadata.title}
            </Link></h1>
            <nav>
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