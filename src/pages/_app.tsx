import { HomeContextProvider } from '../context/HomeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <HomeContextProvider>
        <Component {...pageProps} />
      </HomeContextProvider>
  )
     
}

export default MyApp
