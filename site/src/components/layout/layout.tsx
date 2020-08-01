import * as React from "react"
import "./layout.css"

interface LayoutProps {
  children?: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='container'>
      {children}
      <footer>
        Copyright &copy; 2020. Git Guide is built with Gatsby.js. The repository can be found <a
        href="https://github.com/woojiahao/git-guide">here.</a>
      </footer>
    </div>
  )
}

export default Layout
