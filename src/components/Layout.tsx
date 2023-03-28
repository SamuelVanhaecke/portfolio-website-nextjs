import Navbar from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  )
}
