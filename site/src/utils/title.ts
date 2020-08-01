const chapterTitleRegex = /^\/(\d{2,})-(.*)\/$/

const capitalize = (s: string): string => {
  const firstLetter = s[0].toUpperCase()
  const remaining = s.slice(1)
  return `${firstLetter}${remaining}`
}

const createTitle = (slug: string): string => {

  if (!chapterTitleRegex.test(slug)) {
    throw new Error(`Markdown is not a chapter!`)
  }

  const matches = slug.match(chapterTitleRegex)
  const chapter = matches[1]
  const title = matches[2]

  return `Chapter ${parseFloat(chapter)}: ${title.split("-").map(capitalize).join(' ')}`
}


export default createTitle
