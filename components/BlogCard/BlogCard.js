import {get150Char} from '../../utils/utility.func'
import Link from 'next/link'
import UserCard from '../UserCard/UserCard'
export default function BlogCard({blog}) {
  console.log({blog})
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="bg-white cursor-pointer dark:bg-gray-900 shadow-sm  hover:shadow-2xl transition-all duration-500 px-6 pt-4  rounded-lg ">
        <img
          className="w-full h-56 rounded-md border-none text-white"
          src={`/blog/${blog.slug}/${blog.data.blogImage}`}
          alt={blog.data.title}
        />

        <div className="my-3">
          <p className="text-xl font-bold dark:text-gray-50 transition-all duration-500">
            {blog.data.title}
          </p>
        </div>
        <div>
          <p className="dark:text-gray-50 transition-all duration-500">
            {get150Char(blog.data.description)}...
          </p>
        </div>

        <UserCard blog={blog} />
        <br />
      </div>
    </Link>
  )
}
