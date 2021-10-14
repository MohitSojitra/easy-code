import {get150Char} from '../../utils/utility.func'

export default function BlogCard({blog}) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl transition-all duration-500 px-6 pt-4  rounded-lg ">
      <img
        className="w-full h-56 rounded-md border-none text-white"
        src={`/blog/${blog.slug}/${blog.blogImage}`}
        alt={blog.title}
      />

      <div className="my-3">
        <p className="text-xl font-bold dark:text-gray-50 transition-all duration-500">
          {blog.title}
        </p>
      </div>
      <div>
        <p className="dark:text-gray-50 transition-all duration-500">
          {get150Char(blog.content)}...
        </p>
      </div>
      <div className="mt-3 p-3 bg-gray-100 dark:bg-black rounded-lg flex transition-all duration-500">
        <img
          className="w-14 h-14 rounded-full"
          src={`/author/${blog.authorImage}`}
        />
        <div className="ml-3 flex flex-col justify-between">
          <p className="text-lg font-semibold dark:text-white transition-all duration-500">
            {blog.author}
          </p>
          <p className="text-gray-600">{blog.date}</p>
        </div>
        {/* {blog.author} */}
      </div>
      <br />
    </div>
  )
}
