export const get150Char = content => {
  if (content.length <= 150) return content
  return content.slice(0, 150)
}
