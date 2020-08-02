import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import { useState } from "react"
import "./navigation.css"
import createTitle from "../../utils/title"
import { FiChevronDown, FiChevronUp } from "react-icons/all"

class Chapter {
  private readonly parent: Chapter
  readonly subChapters: Chapter[]
  readonly slug: string

  constructor(slug: string, parent: Chapter = null) {
    this.parent = parent
    this.slug = slug
    this.subChapters = []
  }

  matchSlug(slug: string): Chapter {
    const formattedSlug = `/${slug}/`
    if (formattedSlug === this.slug) return this
    const subChaptersMatches = this.subChapters.filter(ch => ch.matchSlug(formattedSlug))
    if (subChaptersMatches.length >= 1) return subChaptersMatches[0]

    return null
  }

  addSubChapter(slug: string) {
    this.subChapters.push(new Chapter(slug, this))
  }

  get title(): string {
    return createTitle(this.slug, this.parent !== null)
  }

  get hasSubChapters(): boolean {
    return this.subChapters.length > 0
  }

  get linkSlug(): string {
    if (this.parent) {
      return `${this.parent.linkSlug}${this.slug}`.replace("//", "/")
    } else {
      let linkSlug = this.slug
      if (!linkSlug.startsWith("/")) `/${linkSlug}`
      if (!linkSlug.endsWith("/")) `${linkSlug}/`
      return linkSlug
    }
  }

}

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

  const chapterSlugs = allMarkdownRemark.edges.map(({ node }) => node.fields.slug)
  const chapters: Chapter[] = []

  for (const chapter of chapterSlugs) {
    const p = chapter.split("/")
    const chapterParts = p.slice(1, p.length - 1)
    if (chapterParts.length === 1) {
      // If there is only 1 part, it is a stand-alone chapter
      chapters.push(new Chapter(chapter))
    } else {
      // TODO Make this recursive for n number of embedded sub-chapters
      // If there is more than 1 part, it is a sub-chapter
      // Find the parent chapter and attach to it
      const parentChapter = chapters.filter(ch => ch.matchSlug(chapterParts[0]))[0]
      if (!parentChapter) {
        throw new Error(`Parent chapter not found for sub-chapter of ${chapterParts[1]}`)
      }

      parentChapter.addSubChapter(`/${chapterParts[1]}/`)
    }
  }

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <aside className="navigation">
      <div className="title-bar">
        <h1><Link to="/">Git Guide</Link></h1>
        {expanded ? <FiChevronUp style={{ fontSize: `2em` }} className="expand-arrow" onClick={toggleExpanded}/> :
          <FiChevronDown style={{ fontSize: `2em` }} className="expand-arrow" onClick={toggleExpanded}/>}
      </div>
      <ul className="chapters" id={expanded ? "expand-chapters" : ""}>
        {chapters.map(ch => {
          if (ch.hasSubChapters) {
            return (
              <li key={ch.title} className="parent-chapter">{ch.title}
                <ul>
                  {ch.subChapters.map(sch => (
                    <li key={sch.title}>
                      <Link to={sch.linkSlug}>{sch.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          }
          return (
            <li key={ch.title}>
              <Link to={ch.linkSlug}>{ch.title}</Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Navigation

