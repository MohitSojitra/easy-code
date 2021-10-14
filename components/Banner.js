import Head from 'next/head'

export default function Banner() {
  return (
    <div className="pt-24 px-12 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12  xl:w-9/12 sm:text-center">
        <h1 className="mb-8 text-center text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50">
          <span>Learn</span>{' '}
          <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-400 to-yellow-600 lg:inline">
            Build
          </span>{' '}
          <span>Eat </span>{' '}
          <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-yellow-400 to-yellow-600 lg:inline">
            Sleep
          </span>{' '}
          <span>Repeat </span>
        </h1>

        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24 dark:text-gray-400">
          I am self-taught Full Stack Developer, Who try to Learn new technology
          and write a blog 😅.
        </p>
      </div>
    </div>
  )
}
