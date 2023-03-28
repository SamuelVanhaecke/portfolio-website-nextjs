// import { NavLink } from 'react-router-dom'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  return (
    <nav className="m-auto mt-10 mb-24 flex max-w-screen-2xl justify-between">
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
        <li>
          <Link
            href="/portfolio"
            className={
              router.pathname == '/socials'
                ? 'border-b border-black font-light'
                : 'font-light'
            }
          >
            Socials
          </Link>
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
