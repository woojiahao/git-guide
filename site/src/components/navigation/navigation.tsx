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
      </ul>
      {allMarkdownRemark.edges.map(({node}) => <p>{node.fields.slug}</p>)}
    </aside>
  )
}

export default Navigation

