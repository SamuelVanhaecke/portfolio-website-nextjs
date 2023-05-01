import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion, useAnimation, useCycle } from 'framer-motion'

import dropdownArrow from '../../public/images/nav/dropdown-arrow.svg'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/display-name
export default () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  // function to disable scrolling on page
  const toggleScroll = () => {
    const body = document.querySelector('body')
    if (body) {
      body.classList.toggle('overflow-hidden')
    }
  }

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen)
    toggleScroll()
  }

  // useeffect that checks if screenwidth is bigger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      className={`${
        isOpen ? 'fixed top-0 z-50 h-screen w-screen bg-white' : 'relative'
      } m-auto mb-10 flex flex-col px-8 pt-10 md:relative md:mb-24 md:flex-row md:justify-between md:bg-transparent md:px-16 xl:px-28`}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <Link href="/">
          <h1 className="font-ilyas text-5xl uppercase text-black">Samuel</h1>
        </Link>
        {/* TODO: change and animate svg's */}
        <div className="md:hidden">
          <button
            className="flex h-8 w-8 flex-col justify-between"
            onClick={() => handleHamburgerClick()}
          >
            {isOpen ? (
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L37 37" strokeWidth={2} stroke="#27272B" />
                <path d="M37 1L0.999996 37" strokeWidth={2} stroke="#27272B" />
              </svg>
            ) : (
              <svg
                width="36"
                height="38"
                viewBox="0 0 36 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1L36 1" strokeWidth={2} stroke="#27272B" />
                <path d="M0 37L36 37" strokeWidth={2} stroke="#27272B" />
                <path d="M0 19L36 19" strokeWidth={2} stroke="#27272B" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* <ul className="hidden items-center gap-16 md:flex md:gap-24"> */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } mt-48 w-full flex-col items-end justify-center gap-8 md:static md:mt-0 md:flex  md:h-auto md:w-auto md:flex-row md:items-center md:gap-24 md:bg-transparent`}
      >
        <li className="transition-all md:hover:pb-1">
          <Link href="/">
            <p
              className={`${'pr-4 text-6xl font-extralight md:pr-0 md:text-lg md:font-light'} ${
                router.pathname == '/'
                  ? 'border-r-2 border-black md:border-r-0 md:border-b'
                  : ''
              }
            `}
            >
              Home
            </p>
          </Link>
        </li>
        <li className="transition-all md:hover:pb-1">
          <Link href="/portfolio">
            <p
              className={`${'pr-4 text-6xl font-extralight md:pr-0 md:text-lg md:font-light'} ${
                router.pathname == '/portfolio'
                  ? 'border-r-2 border-black md:border-r-0 md:border-b'
                  : ''
              }
            `}
            >
              Portfolio
            </p>
          </Link>
        </li>
        <li className="hidden flex-col items-center md:flex">
          <button className="peer flex items-center gap-1 text-lg font-light">
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
          <Link href="/contact">
            <p
              className={`${'border-black bg-opacity-0 py-0 pr-4 text-6xl font-extralight transition-all duration-150 ease-out hover:text-white md:rounded-full md:border md:border-solid md:py-1.5 md:px-5 md:text-lg md:font-light md:hover:bg-black md:hover:bg-opacity-100'}, ${
                router.pathname == '/contact'
                  ? 'rounded-none border-r-2 border-black md:border-b'
                  : ''
              }`}
            >
              Contact
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
