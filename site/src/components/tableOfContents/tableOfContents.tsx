import * as React from "react"
import "./tableOfContents.css"

interface TableOfContentsProp {
  contents: any
}

const TableOfContents: React.FC<TableOfContentsProp> = ({ contents }) => {
  return (
    <div className="toc">
      <h1>Contents</h1>
      <div dangerouslySetInnerHTML={{ __html: contents }}/>
    </div>
  )
}

export default TableOfContents
