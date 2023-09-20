import { Nunito_Sans } from 'next/font/google'
import Header from '@/components/Header'
import FlagsDashboard from '@/components/Dashboard'

const inter = Nunito_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <main className={inter.className} >
      <FlagsDashboard />
    </main>
    </>
    
  )
}
