import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout/layout"

interface ChapterTemplateProps extends PageProps {
  data: {
    markdownRemark: {
      html: string,
      fields: {
        slug: string
      }
    }
  }
}

const capitalize = (s: string): string => {
  const firstLetter = s[0].toUpperCase()
  const remaining = s.slice(1)
  return `${firstLetter}${remaining}`
}

const createTitle = (chapter: string, title: string): string =>
  `Chapter ${parseFloat(chapter)}: ${title.split("-").map(capitalize).join(' ')}`

const ChapterTemplate: React.FC<ChapterTemplateProps> = ({ data }) => {
  const chapterContent = data.markdownRemark.html

  const chapterTitleRegex = /^\/(\d{2,})-(.*)\/$/
  const chapterSlug = data.markdownRemark.fields.slug
  if (!chapterTitleRegex.test(chapterSlug)) {
    throw new Error(`Markdown is not a chapter!`)
  }

  const matches = chapterSlug.match(chapterTitleRegex)
  const chapter = matches[1]
  const title = matches[2]

  return (
    <Layout>
      <h1>{createTitle(chapter, title)}</h1>
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
    }
  }
`
