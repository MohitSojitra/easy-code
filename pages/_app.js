import Header from '../Component/Header/Header'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
