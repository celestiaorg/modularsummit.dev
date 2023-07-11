import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./sections/header"
import Footer from "./sections/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
