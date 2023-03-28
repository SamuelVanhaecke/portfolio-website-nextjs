import topArrow from '../../public/images/footer/top_arrow.png'
import divider from '../../public/images/footer/divider_dot.png'
import Link from 'next/link'
import Image from 'next/image'

export default () => {
  return (
    <div className="m-auto mt-36 mb-6 grid h-96 max-w-screen-2xl grid-cols-[130px_minmax(900px,_1fr)_130px] items-end gap-24 border-t border-black pt-6">
      <div className="flex h-fit content-end justify-center rounded-full border border-black p-4 hover:h-full hover:cursor-pointer">
        <Image className="h-fit" src={topArrow} alt="" />
      </div>
      <div className="flex h-4/6 flex-col justify-between">
        <div className="flex flex-row gap-24">
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-sm font-extralight">Content</h3>
            <p className="text-base font-light">Home</p>
            <p className="text-base font-light">Portfolio</p>
            <p className="text-base font-light">Contact</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-sm font-extralight">Socials</h3>
            <p className="text-base font-light">GitHub</p>
            <p className="text-base font-light">LinkedIn</p>
            <p className="text-base font-light">Instagram</p>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <p className="border-b border-black">Privacy Policy</p>
          <Image className="h-1 w-1" src={divider} alt="" />
          <p className="border-b border-black">Disclaimer</p>
        </div>
      </div>
      <div className="flex h-4/6 flex-col justify-between">
        <div className="flex flex-col items-end gap-2">
          <p className="text-right font-ilyas text-3xl uppercase">
            Let's work <br></br> together
          </p>
          <Link
            href="/contact"
            className="rounded-full border border-solid border-black px-5 py-2.5 text-center font-light hover:bg-black hover:text-white"
          >
            Contact
          </Link>
        </div>
        <p className="text-right font-ilyas text-3xl uppercase">Samuel</p>
      </div>
    </div>
  )
}
