import * as React from "react"
import "./layout.css"
import Navigation from "../navigation/navigation"

interface LayoutProps {
  children?: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    </div>
  )
}

export default Layout
