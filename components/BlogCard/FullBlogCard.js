import {getChar} from '../../utils/utility.func'
import Link from 'next/link'
import UserCard from '../UserCard/UserCard'
export default function FullBlogCard({blog}) {
  // console.log({blog})
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="flex bg-white cursor-pointer dark:bg-gray-900 shadow-sm  hover:shadow-2xl transition-all duration-500 px-6 pt-4 pb-4 rounded-lg ">
        <img
          className="w-1/4 h-56 object-contain bg-cover rounded-md border-none text-white"
          src={`/blog/${blog.slug}/${blog.data.blogImage}`}
          alt={blog.data.title}
        />
        <div className="ml-7 w-3/4 ">
          <div className="my-3">
            <p className="text-xl font-bold dark:text-gray-50 transition-all duration-500">
              {blog.data.title}
            </p>
          </div>
          <div>
            <p className="dark:text-gray-50 transition-all duration-500">
              {getChar(blog.data.description, 350)}
            </p>
          </div>

          <UserCard blog={blog} />
        </div>
        <br />
      </div>
    </Link>
  )
}
