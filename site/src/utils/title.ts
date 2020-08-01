const chapterTitleRegex = /^\/?(\d{2,})-([-&_+\w\d]*)\/?$/

const capitalize = (s: string): string => {
  const firstLetter = s[0].toUpperCase()
  const remaining = s.slice(1)
  return `${firstLetter}${remaining}`
}

const createTitle = (slug: string, subChapter: boolean = false): string => {
  if (!chapterTitleRegex.test(slug)) {
    throw new Error(`Markdown is not a chapter!`)
  }

  const matches = slug.match(chapterTitleRegex)
  let [, chapter, title] = matches

  // TODO Support more than two-level nesting
  if (subChapter) {
    if (!chapterTitleRegex.test(title)) {
      throw new Error(`Sub-chapter ${title} naming convention is wrong. Must be e.g. 07-01-Git Log`)
    }

    const subChapterMatches = title.match(chapterTitleRegex)
    const subChapter = subChapterMatches[1]
    chapter = `${chapter}.${subChapter}`
    title = subChapterMatches[2]
  }

  return `Chapter ${chapter} - ${title.split("-").map(capitalize).join(' ')}`
}


export default createTitle
