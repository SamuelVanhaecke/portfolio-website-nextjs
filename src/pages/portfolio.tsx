import Image from 'next/image'

// components
import Layout from '@/components/Layout'

export default () => {
  // create data variable and set it to dummy json
  const data = [
    {
      id: 1,
      title: 'Project 1',
      image: 'https://i.imgur.com/rLsBDlM.png',
      alt: 'Project 1',
      width: 619,
      height: 400,
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'https://i.imgur.com/1aGsQB4.png',
      alt: 'Project 2',
      width: 1648,
      height: 2124,
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'https://i.imgur.com/1aGsQB4.png',
      alt: 'Project 3',
      width: 1920,
      height: 1080,
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      id: 4,
      title: 'Project 4',
      image: 'https://i.imgur.com/1aGsQB4.png',
      alt: 'Project 4',
      width: 1920,
      height: 1080,
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      id: 5,
      title: 'Project 5',
      image: 'https://i.imgur.com/1aGsQB4.png',
      alt: 'Project 5',
      width: 1920,
      height: 1080,
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
  ]

  const classNames = ['self-start', 'self-center', 'self-end']

  return (
    <Layout>
      <div className="m-auto max-w-screen-xl">
        <h1 className="font-ilyas text-8xl uppercase">
          Take a look <br />
          at my work
        </h1>
        <div className="flex flex-col">
          {data.map(item => (
            <div
              className={`relative my-32 w-fit border border-solid border-black p-3 transition-all hover:-rotate-1 hover:cursor-pointer ${
                classNames[Math.floor(Math.random() * classNames.length)]
              }`}
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
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
