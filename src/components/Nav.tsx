import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion, useAnimation, useCycle } from 'framer-motion'

import dropdownArrow from '../../public/images/nav/dropdown-arrow.svg'
import { useState } from 'react'

export default () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative m-auto mt-10 mb-16 flex flex-col justify-between px-8 md:mb-24 md:flex-row md:px-16 xl:px-28">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <h1 className="font-ilyas text-5xl uppercase text-black">Samuel</h1>
        </Link>
        {/* TODO: change and animate svg's */}
        <div className="md:hidden">
          <button
            className="flex h-8 w-8 flex-col justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24">
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="black"
                  stroke-width="2"
                />
                <line
                  x1="12"
                  y1="4"
                  x2="12"
                  y2="20"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M2 6h20v2H2V6zm0 5h20v2H2v-2zm0 5h20v2H2v-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* <ul className="hidden items-center gap-16 md:flex md:gap-24"> */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } mt-8 w-full flex-col items-center justify-center gap-10 md:static md:mt-0 md:flex md:h-auto md:w-auto md:flex-row md:gap-24 md:bg-transparent`}
      >
        <li className="transition-all hover:pb-1">
          <Link
            href="/"
            className={
              router.pathname == '/'
                ? 'border-b border-black font-light'
                : 'font-light'
            }
          >
            Home
          </Link>
        </li>
        <li className="transition-all hover:pb-1">
          <Link
            href="/portfolio"
            className={
              router.pathname == '/portfolio'
                ? 'border-b border-black font-light'
                : 'font-light'
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="hidden flex-col items-center md:flex">
          <button className="peer flex items-center gap-1 font-light">
            Socials
            <Image src={dropdownArrow} alt="arrow pointing down"></Image>
          </button>
          <div className="absolute hidden flex-col items-center pt-10 opacity-100 transition  duration-200 ease-out hover:flex peer-hover:flex peer-hover:translate-y-3 peer-hover:opacity-0">
            <a
              className="px-5 py-1 font-light hover:font-medium"
              href="https://github.com/SamuelVanhaecke"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="px-5 py-1 font-light hover:font-medium"
              href="https://www.linkedin.com/in/samuel-vanhaecke/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="px-5 py-1 font-light hover:font-medium"
              href="#"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </li>
        <li>
          <Link
            href="/contact"
            className={
              'rounded-full border border-solid border-black bg-opacity-0 px-5 py-2.5 font-light transition-all duration-150 ease-out hover:bg-black hover:bg-opacity-100 hover:text-white'
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
