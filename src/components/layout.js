import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./sections/header"
import Footer from "./sections/footer"
import AgendaFooter from "./sections/agenda-footer"

const Layout = ({ children, footerType }) => {
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
        <main>{children}</main>
        {footerType === "agenda" ? <AgendaFooter/> : <Footer/> }
    </>
  )
}

export default Layout
