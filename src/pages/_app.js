import '@/styles/main.scss'
import { DarkProvider } from "../context/darkContext"

export default function App({ Component, pageProps }) {
  return (
    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>

  )
}
