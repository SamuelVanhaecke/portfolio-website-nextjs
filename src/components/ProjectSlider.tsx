import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import useSWR from 'swr'
import { motion, AnimatePresence } from 'framer-motion'

// images
import placeholder from '../../public/images/placeholder_mac.png'
import macFrame from '../../public/images/mac_frame.png'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// TODO: fix computer slider (or other type of animation to switch projects)

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

// @ts-ignore
export default ({ isVisible }) => {
  const { data, error } = useSWR('/api/staticdata', fetcher)
  const [currentProject, setCurrentProject] = useState<any>()
  const [highlightedProjects, setHighlightedProjects] = useState<any>()

  useEffect(() => {
    if (data) {
      const projects = JSON.parse(data)
      const highlightedProjects = projects.filter(
        (project: any) => project.highlighted === true,
      )
      setHighlightedProjects(highlightedProjects)
      setCurrentProject(highlightedProjects[0])
      console.log(highlightedProjects[0].title)
    }
  }, [data])

  const handleNext = () => {
    console.log('handling next')
    const currentIndex = highlightedProjects.indexOf(currentProject)
    const nextIndex = currentIndex + 1
    if (nextIndex < highlightedProjects.length) {
      setCurrentProject(highlightedProjects[nextIndex])
    } else {
      setCurrentProject(highlightedProjects[0])
    }
  }

  const handlePrevious = () => {
    console.log('handling previous')
    const currentIndex = highlightedProjects.indexOf(currentProject)
    const nextIndex = currentIndex - 1
    if (nextIndex >= 0) {
      setCurrentProject(highlightedProjects[nextIndex])
    } else {
      setCurrentProject(highlightedProjects[highlightedProjects.length - 1])
    }
  }

  return (
    <div className="m-auto my-20 flex w-full items-center justify-between">
      <div
        onClick={() => handlePrevious()}
        className="h-fit transition-all hover:-translate-x-3 hover:cursor-pointer"
      >
        <svg
          width="198"
          height="118"
          viewBox="0 0 198 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M198 59L1.00001 59" stroke="#27272B" />
          <path d="M59 117L1.00001 59L59 1.00001" stroke="#27272B" />
        </svg>
      </div>
      {currentProject && (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key={currentProject.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={currentProject.image}
                  alt={''}
                  width={currentProject.width}
                  height={currentProject.height}
                  className="h-[30vh] w-auto border border-black p-3"
                />
                <h2 className="mt-12 mb-6 font-ilyas text-5xl uppercase">
                  {currentProject.title}
                </h2>
                <ul className="flex max-w-sm flex-row flex-wrap gap-4">
                  {currentProject.tags.map((tag: string) => (
                    <li className="rounded-full border border-black px-3 py-1 text-black">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="my-10 max-w-xl font-normal">
                  {currentProject.description}
                </p>
                <Link
                  href={`/project/${currentProject.title}`}
                  className="rounded-full border border-black px-7 py-3 text-xl font-light hover:bg-black hover:text-white"
                >
                  Read more
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <div
        onClick={() => handleNext()}
        className="h-fit transition-all hover:translate-x-3 hover:cursor-pointer"
      >
        <svg
          width="198"
          height="118"
          viewBox="0 0 198 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 59H197" stroke="#27272B" />
          <path d="M139 1L197 59L139 117" stroke="#27272B" />
        </svg>
      </div>
    </div>
  )
}