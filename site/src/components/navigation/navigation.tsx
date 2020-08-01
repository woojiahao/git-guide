import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import "./navigation.css"
import createTitle from "../../utils/title"

const Navigation: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: fields___slug, order: ASC }) {
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
      <h1><Link to="/">Git Guide</Link></h1>
      <ul>
        {allMarkdownRemark.edges.map(({node}) => <li><Link to={node.fields.slug}>{createTitle(node.fields.slug)}</Link></li>)}
      </ul>
    </aside>
  )
}

export default Navigation

