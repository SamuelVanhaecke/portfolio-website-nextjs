import Navbar from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="max-w-[1800px] m-auto flex flex-col items-center px-6 md:mb-24 md:px-16 xl:px-28">
        {children}
      </div>
      <Footer />
    </>
  )
}
