import * as React from "react"
import "./layout.css"
import Navigation from "../navigation/navigation"
import TableOfContents from "../tableOfContents/tableOfContents"

interface LayoutProps {
  children?: any
  tableOfContents?: any
}

const Layout: React.FC<LayoutProps> = ({ children, tableOfContents }) => {
  return (
    <div className="container">
      <Navigation/>
      <div className="content">
        <main>
          {children}
        </main>
        <footer>

          <hr/>

          Copyright &copy; 2020. Git Guide is built with Gatsby.js. The repository can be found <a
          href="https://github.com/woojiahao/git-guide">here.</a>
        </footer>
      </div>
      {tableOfContents && <TableOfContents contents={tableOfContents}/>}
    </div>
  )
}

export default Layout
