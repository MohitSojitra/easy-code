import Head from 'next/head'
import Image from 'next/image'
import Header from './Header/Header'

export default function Wrapper({children}) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 min-h-screen">
      <Header />
      {children}
    </div>
  )
}
