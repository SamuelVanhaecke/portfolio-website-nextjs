import Image from 'next/image'
import useSWR from 'swr'

// components
import Layout from '@/components/Layout'
import Link from 'next/link'
import BackgroundGradient from '@/components/BackgroundGradientBlue'
import BackgroundGradientOrange from '@/components/BackgroundGradientOrange'

// images
import blueGradient from '../../public/images/blue_big.png'
import orangeGradient from '../../public/images/orange_big.png'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

// eslint-disable-next-line react/display-name
export default () => {
  const { data, error } = useSWR('/api/projectsdata', fetcher)

  if (error) return <div>Failed to load</div>

  if (!data) return <div>Loading...</div>

  const projects = JSON.parse(data)
  const classNames = ['2xl:self-start', '2xl:self-center', '2xl:self-end']

  return (
    <>
      <BackgroundGradient />
      {/* <BackgroundGradientOrange /> */}
      <Layout>
        <div className="w-full">
          {/* <Image
            className="absolute -left-64 top-[50%] -z-50"
            src={orangeGradient}
            alt=""
          /> */}
          {/* <Image className="absolute left-56 -z-40" src={blueGradient} alt="" /> */}
          <h1 className="mb-12 font-ilyas text-6xl uppercase md:mb-20 md:text-7xl lg:text-8xl">
            Take a look at <br /> my work
          </h1>
          <div className="flex flex-col gap-12 sm:gap-24 md:gap-48 lg:gap-64">
            {/* @ts-ignore */}
            {projects.map(item => (
              <Link
                className={`relative w-fit self-center border border-solid border-black p-3 transition-all hover:-rotate-1 ${
                  classNames[Math.floor(Math.random() * classNames.length)]
                }`}
                href={`/project/${item.title}`}
                key={item.id}
              >
                <Image
                  className="w-auto md:max-h-[50vh] md:min-h-[40vh] 2xl:max-h-[80vh] 2xl:min-h-[60vh]"
                  src={item.coverImage}
                  alt={item.alt}
                  width={item.coverImageDimensions.width}
                  height={item.coverImageDimensions.height}
                />
                <ul className="absolute bottom-5 right-5 left-5 flex flex-row-reverse flex-wrap-reverse gap-3  md:flex-nowrap">
                  {/* @ts-ignore */}
                  {item.tags.map(tag => (
                    <li
                      className="rounded-full border border-white bg-black bg-opacity-10 py-1 px-4 text-xs font-light text-white backdrop-blur-md md:py-[5px] md:text-sm"
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
    </>
  )
}
