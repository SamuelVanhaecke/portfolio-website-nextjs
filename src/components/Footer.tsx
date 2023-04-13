import topArrow from '../../public/images/footer/top_arrow.png'
import divider from '../../public/images/footer/divider_dot.png'
import Link from 'next/link'
import Image from 'next/image'

export default () => {
  return (
    <div className="m-auto mt-36 mb-6 flex max-w-screen-2xl flex-col items-center justify-center gap-16 border-t border-black px-8 pt-16 md:px-24 lg:grid lg:h-96 lg:grid-cols-[130px_1fr_130px] lg:items-end lg:gap-24 lg:pt-6 2xl:px-0">
      <div className="hidden h-fit content-end justify-center rounded-full border border-black p-4 hover:h-full hover:cursor-pointer lg:flex">
        <Image className="h-fit" src={topArrow} alt="" />
      </div>
      <div className="flex h-4/6 flex-col justify-between">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="mb-2 text-sm font-extralight">Content</h3>
            <Link href="/" className="px-5 py-0.5 font-light">
              Home
            </Link>
            <Link href="/portfolio" className="px-5 py-0.5 font-light">
              Portfolio
            </Link>
            <Link href="/contact" className="px-5 py-0.5 font-light">
              Contact
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="mb-2 text-sm font-extralight">Socials</h3>
            <a
              className="px-5 py-0.5 font-light"
              href="https://github.com/SamuelVanhaecke"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="px-5 py-0.5 font-light"
              href="https://www.linkedin.com/in/samuel-vanhaecke/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a className="px-5 py-0.5 font-light" href="#" target="_blank">
              Instagram
            </a>
          </div>
        </div>
        <div className="hidden w-full items-center gap-4 lg:flex">
          <p className="border-b border-black">Privacy Policy</p>
          <Image className="h-1 w-1" src={divider} alt="" />
          <p className="border-b border-black">Disclaimer</p>
        </div>
      </div>
      <div className="flex h-4/6 flex-col justify-between">
        <div className="flex flex-col items-center gap-2 lg:items-end">
          <p className="text-center font-ilyas text-3xl uppercase lg:text-right">
            Let's work <br></br> together
          </p>
          <Link
            href="/contact"
            className="rounded-full border border-solid border-black px-5 py-2.5 text-center font-light hover:bg-black hover:text-white"
          >
            Contact
          </Link>
        </div>
        <p className="mt-12 text-center font-ilyas text-3xl uppercase lg:mt-0 lg:text-right">
          Samuel
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-2 lg:hidden">
        <p className="border-b border-black text-sm font-light">
          Privacy Policy
        </p>
        <Image className="h-0.5 w-0.5" src={divider} alt="" />
        <p className="border-b border-black text-sm font-light">Disclaimer</p>
      </div>
    </div>
  )
}
