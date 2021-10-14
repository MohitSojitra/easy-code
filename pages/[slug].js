import Head from 'next/head'
import Image from 'next/image'
import {data} from '../lib/data'

export default function Blog({blog}) {
  return (
    <div>
      <main>
        {Object.keys(blog).map(k => {
          return (
            <>
              <div>
                {k} = {blog[k]}
              </div>
              <br />
            </>
          )
        })}
      </main>
    </div>
  )
}

export async function getStaticProps({params}) {
  const blog = data.find(({slug}) => slug === params.slug)
  return {
    props: {
      blog,
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const paramas = data.map(blog => {
    return {
      params: {slug: blog.slug},
    }
  })

  return {
    paths: paramas,
    fallback: true,
  }
}
