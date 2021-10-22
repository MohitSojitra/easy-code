export const getChar = (content, number) => {
  if (content.length <= number) return content
  return content.slice(0, number)
}
