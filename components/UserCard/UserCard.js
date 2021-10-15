function UserCard({blog}) {
  return (
    <div className="mt-3 p-3 bg-gray-100 dark:bg-black rounded-lg flex transition-all duration-500">
      <img
        className="w-14 h-14 rounded-full"
        src={`/author/${blog.data.authorImage}`}
      />
      <div className="ml-3 flex flex-col justify-between">
        <p className="text-lg font-semibold dark:text-white transition-all duration-500">
          {blog.data.author}
        </p>
        <p className="text-gray-600">{blog.data.date}</p>
      </div>
      {/* {blog.author} */}
    </div>
  )
}

export default UserCard
