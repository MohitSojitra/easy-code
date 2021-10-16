import {AiFillHeart} from 'react-icons/ai'
import {FaGithubAlt, FaGithub, FaLinkedin, FaLinkedinIn} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className=" flex  bg-gray-100 dark:bg-gray-900 py-5 px-3  w-full shadow dark:shadow-2 z-50 transition-all duration-500">
      <div className="flex-1 text-center">
        <p className="flex items-center justify-center font-semibold text-lg dark:text-gray-100">
          Made with <AiFillHeart fill="red" className="mx-1" />
          by Mohit Sojitra
        </p>
      </div>
      <div className="flex">
        <a
          className="flex items-center mx-2 lg:mx-4 text-gray-800 dark:text-gray-100   hover:text-yellow-500 dark:hover:text-yellow-400"
          href="https://github.com/MohitSojitra"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-lg">
            <FaGithub className="text-lg" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/mohit-sojitra"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 dark:text-gray-100 hover:text-yellow-500  dark:hover:text-yellow-400"
        >
          <span className="text-lg">
            <FaLinkedinIn className="text-xl" />
          </span>
        </a>
      </div>
    </div>
  )
}
