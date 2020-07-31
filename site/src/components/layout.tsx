import * as React from "react"

const Layout: React.FC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: `2em`,
      marginTop: `2em`,
      maxWidth: 900
    }}>
    {children}
    <footer>
      Copyright &copy; 2020. Git Guide is built with Gatsby.js. The repository can be found <a
      href="https://github.com/woojiahao/git-guide">here.</a>
    </footer>
  </div>
)

export default Layout
