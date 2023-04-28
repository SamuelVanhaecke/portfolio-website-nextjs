import Navbar from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="m-auto max-w-screen-2xl px-6 md:mb-24 md:px-16 xl:px-28">
        {children}
      </div>
      <Footer />
    </>
  )
}
