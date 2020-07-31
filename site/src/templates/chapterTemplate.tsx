import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"

interface ChapterTemplateProps extends PageProps {
  data: {
    markdownRemark: {
      html: string
    }
  }
}

export default class ChapterTemplate extends React.Component<ChapterTemplateProps> {
  public render() {
    const chapterContent = this.props.data.markdownRemark.html
    return (
      <Layout>
        <h1>Hello world</h1>
        <div dangerouslySetInnerHTML={{ __html: chapterContent }}/>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
