import Navbar from './Nav'
import Footer from './Footer'

// Components
import BackgroundGradients from './BackgroundGradients'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <BackgroundGradients />
      <div className="m-auto flex max-w-[1800px] flex-col items-center px-6 md:mb-24 md:px-16 xl:px-28">
        {children}
      </div>
      <Footer />
    </>
  )
}
