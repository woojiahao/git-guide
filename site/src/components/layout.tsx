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
  </div>
)

export default Layout
