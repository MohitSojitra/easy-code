import Wrapper from '../../components/Wrapper'
import {getPostSlugs} from '../../lib/data'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote} from 'next-mdx-remote'
import UserCard from '../../components/UserCard/UserCard'
import MetaTag from '../../components/MetaTag/MetaTag'

export default function Blog({blog}) {
  // console.log({blog})
  return (
    <Wrapper>
      <MetaTag
        title={blog.data.title}
        description={blog.data.description}
        siteUrl={`https://blog.mohitsojitra.tech/${blog.data.slug}`}
        previewImage={`https://blog.mohitsojitra.tech/blog/${blog.data.slug}/${blog.data.blogImage}`}
      />
      <main className="w-full flex flex-col  flex-1 items-center pt-28">
        <div className="w-3/5 ">
          {/* Header */}
          <div className=" w-full border-b-4 border-yellow-500 dark:border-yellow-400 mb-4">
            <img
              className="object-contain w-full h-72 m-4 rounded-lg"
              src={`/blog/${blog.slug}/${blog.data.blogImage}`}
              alt="Article Image"
            />
            <p className="text-3xl p-4 font-bold text-center mb-4 dark:text-gray-50">
              {blog.data.title}
            </p>
            <UserCard blog={blog} />
            <div className="mb-4" />
          </div>
          {/* Mdx */}
          <div className="w-full">
            <article class="prose lg:prose-lg py-7 dark:prose-dark max-w-full">
              <MDXRemote {...blog.content} />
            </article>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export async function getStaticProps({params}) {
  const allPosts = getPostSlugs()
  const blog = allPosts.find(post => post.slug === params.slug)
  const content = await serialize(blog.content, {
    scope: blog.data,
  })
  return {
    props: {
      blog: {...blog, content},
    },
  }
}

export async function getStaticPaths() {
  const allPosts = getPostSlugs()
  const paramas = allPosts.map(post => ({params: {slug: post.slug}}))

  return {
    paths: paramas,
    fallback: false,
  }
}
