import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function Wrapper({children}) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 min-h-screen flex flex-col transition-all duration-500">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
