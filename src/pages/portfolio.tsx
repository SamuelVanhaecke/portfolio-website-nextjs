import Image from 'next/image'
import useSWR from 'swr'

// components
import Layout from '@/components/Layout'
import Link from 'next/link'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

export default () => {
  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>

  if (!data) return <div>Loading...</div>

  const projects = JSON.parse(data)

  const classNames = ['self-start', 'self-center', 'self-end']

  return (
    <Layout>
      <div className="m-auto max-w-screen-xl">
        <h1 className="font-ilyas text-8xl uppercase">
          Take a look <br />
          at my work
        </h1>
        <div className="flex flex-col">
          {projects.map(item => (
            <Link
              className={`relative my-32 w-fit border border-solid border-black p-3 transition-all hover:-rotate-1 ${
                classNames[Math.floor(Math.random() * classNames.length)]
              }`}
              href={`/project/${item.title}`}
              key={item.id}
            >
              <Image
                className="max-h-[60vh] min-h-[40vh] w-auto"
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
              <ul className="absolute bottom-5 right-5 flex gap-3">
                {item.tags.map(tag => (
                  <li
                    className="rounded-full border border-white px-4 py-[5px] text-sm font-light text-white"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
