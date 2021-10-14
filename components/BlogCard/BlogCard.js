export default function BlogCard({blog}) {
  return (
    <div className="bg-pink-50">
      <div>{blog.slug}</div>
      <div>{blog.title}</div>
      <div>{blog.author}</div>
      <br />
    </div>
  )
}
