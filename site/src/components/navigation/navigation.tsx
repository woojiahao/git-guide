import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import "./navigation.css"

const Navigation: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }    
    }
  `)

  return (
    <aside className="navigation">
      <h1>Git Guide</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {allMarkdownRemark.edges.map(({node}) => <li><Link to={node.fields.slug}>{node.fields.slug}</Link></li>)}
      </ul>
    </aside>
  )
}

export default Navigation

