import {get150Char} from '../../utils/utility.func'

export default function BlogCard({blog}) {
  return (
    <div className="bg-white shadow-sm hover:shadow-2xl transition duration-500 px-6 pt-4  rounded-lg ">
      <img
        className="w-full h-56 rounded-md border-none"
        src={`/blog/${blog.slug}/${blog.blogImage}`}
        alt={blog.title}
      />

      <div className="my-3">
        <p className="text-xl font-bold">{blog.title}</p>
      </div>
      <div>
        <p>{get150Char(blog.content)}...</p>
      </div>
      <div className="mt-3 p-3 bg-gray-100  rounded-lg flex">
        <img
          className="w-14 h-14 rounded-full"
          src={`/author/${blog.authorImage}`}
        />
        <div className="ml-3 flex flex-col justify-between">
          <p className="text-lg font-semibold">{blog.author}</p>
          <p className="text-gray-600">{blog.date}</p>
        </div>
        {/* {blog.author} */}
      </div>
      <br />
    </div>
  )
}
