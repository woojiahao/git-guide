import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout/layout"
import createTitle from "../utils/title"

interface ChapterTemplateProps extends PageProps {
  data: {
    markdownRemark: {
      html: string,
      fields: {
        slug: string
      }
      tableOfContents: string
    }
  }
}

const ChapterTemplate: React.FC<ChapterTemplateProps> = ({ data }) => {
  const chapterContent = data.markdownRemark.html

  return (
    <Layout tableOfContents={data.markdownRemark.tableOfContents}>
      <div dangerouslySetInnerHTML={{ __html: chapterContent }}/>
    </Layout>
  )
}

export default ChapterTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      tableOfContents
    }
  }
`
