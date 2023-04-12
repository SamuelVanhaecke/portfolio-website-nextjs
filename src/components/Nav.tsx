import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion, useAnimation, useCycle } from 'framer-motion'

import dropdownArrow from '../../public/images/nav/dropdown-arrow.svg'
import { useState } from 'react'

export default () => {
  const router = useRouter()

  return (
    <nav className="relative m-auto mt-10 mb-24 flex max-w-screen-2xl justify-between">
      <Link href="/">
        <h1 className="font-ilyas text-5xl uppercase text-black">Samuel</h1>
      </Link>
      <ul className="flex items-center gap-24">
        <li>
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
        <li>
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
        <li className="flex flex-col items-center">
          <button className="peer flex items-center gap-1 font-light">
            Socials<Image src={dropdownArrow} alt="arrow pointing down"></Image>
          </button>
          <div className="absolute hidden flex-col items-center pt-10 transition opacity-100  duration-200 ease-out hover:flex peer-hover:flex peer-hover:translate-y-3 peer-hover:opacity-0">
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
            // set default classname and add active classname
            className={
              'rounded-full border border-solid border-black px-5 py-2.5 font-light hover:bg-black hover:text-white'
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
