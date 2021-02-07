import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const items = [
    { name: "gatsby", url: "https://www.gatsbyjs.org/", comp: GatsbyIcon },
    { name: "react", url: "https://reactjs.org/", comp: ReactIcon },
    { name: "graphql", url: "http://graphql.org/", comp: GraphqlIcon },
    { name: "jss", url: "http://cssinjs.org/", comp: JssIcon },
    { name: "material-ui", url: "https://material-ui-next.com/", comp: MaterialUiIcon },
    { name: "redux", url: "https://redux.js.org/", comp: ReduxIcon },
    { name: "algolia", url: "https://www.algolia.com/", comp: AlgoliaIcon },
    { name: "webpack", url: "https://webpack.js.org/", comp: WebpackIcon },
    { name: "babel", url: "https://babeljs.io/", comp: BabelIcon },
    { name: "netlify", url: "https://www.netlify.com/", comp: NetlifyIcon }
  ]
  const styles = {
    box: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    link: {
      display: "inline-block",
      padding: "8px"
    },
    svg: {
      width: "22px",
      height: "22px"
    },
    header: {
      textAlign: "center",
      fontSize: ".85em",
      letterSpacing: ".3em",
      width: "100%",
      margin: "0 0 .8em 0",
      fontWeight: 300
    }
  }
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-blog" role="menuitem">
                <Link to={`/blog`}>Blog</Link>
              </li>
              <li className="nav-projects" role="menuitem">
                <Link to={`/projects`}>Projects</Link>
              </li>
              <li className="nav-portfolio" role="menuitem">
                <Link to={`/portfolio`}>Portfolio</Link>
              </li>

              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Elements</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://github.com/BlueJacket98"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://leetcode-cn.com/u/lan-se-chong-feng-yi-2/"
                title="LeetCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <div>
          {items.map(item => {
            const Icon = item.comp;
            return (
              <a
                href={item.url}
                key={item.name}
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
              >
                <Icon className={classes.svg} />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  )
}

export default Layout
