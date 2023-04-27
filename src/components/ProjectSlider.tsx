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

interface Project {
  id: string
  title: string
  description: string
  coverImage: string
  coverImageDimensions: {
    width: number
    height: number
  }
  projectVideo: string
  alt: string
  tags: string[]
  highlighted: boolean
  quote: string
  caroussel: {
    images: {
      src: string
      alt: string
    }[]
  }
}

type Projects = Project[]

// eslint-disable-next-line react/display-name
export default ({ isVisible }: any) => {
  const { data, error } = useSWR('/api/projectsdata', fetcher)
  const [currentProject, setCurrentProject] = useState<Project>()
  const [highlightedProjects, setHighlightedProjects] = useState<Projects>()

  useEffect(() => {
    if (data) {
      const projects: Projects = JSON.parse(data)
      const highlightedProjects = projects.filter(
        project => project.highlighted === true,
      )
      // set hightlighted projects with type Project
      setHighlightedProjects(highlightedProjects)
      setCurrentProject(highlightedProjects[0])
      console.log(highlightedProjects[0].title)
    }
  }, [data])

  const handleNext = () => {
    console.log('handling next')
    if (currentProject) {
      const currentIndex = highlightedProjects!.indexOf(currentProject)
      const nextIndex = currentIndex + 1
      if (nextIndex < highlightedProjects!.length) {
        setCurrentProject(highlightedProjects![nextIndex])
      } else {
        setCurrentProject(highlightedProjects![0])
      }
    }
  }

  const handlePrevious = () => {
    console.log('handling previous')
    if (currentProject) {
      const currentIndex = highlightedProjects!.indexOf(currentProject)
      const nextIndex = currentIndex - 1
      if (nextIndex >= 0) {
        setCurrentProject(highlightedProjects![nextIndex])
      } else {
        setCurrentProject(highlightedProjects![highlightedProjects!.length - 1])
      }
    }
  }

  return (
    <div className="m-auto my-16 flex w-full flex-col items-center justify-between lg:flex-row">
      <div className="mb-8 flex w-full justify-between lg:hidden">
        <div onClick={() => handlePrevious()} className="h-fit">
          <svg
            width="66"
            height="39.33"
            viewBox="0 0 66 39.33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M66 19.67L1 19.67" stroke="#27272B" />
            <path d="M19.67 39.33L1 19.67L19.67 1" stroke="#27272B" />
          </svg>
        </div>
        <div onClick={() => handleNext()} className="h-fit">
          <svg
            width="66"
            height="39.33"
            viewBox="0 0 66 39.33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 19.67H65" stroke="#27272B" />
            <path d="M45.67 1L65 19.67L45.67 38.33" stroke="#27272B" />
          </svg>
        </div>
      </div>
      <div
        onClick={() => handlePrevious()}
        className="hidden h-fit transition-all hover:-translate-x-3 hover:cursor-pointer lg:block"
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
            >
              <div className="flex flex-col items-center">
                <Image
                  src={currentProject.coverImage}
                  alt={''}
                  width={currentProject.coverImageDimensions.width}
                  height={currentProject.coverImageDimensions.height}
                  className="h-auto w-full border border-black p-5 md:h-[40vh] lg:w-auto"
                />
                <h2 className="mt-8 mb-6 font-ilyas text-5xl uppercase md:mt-12">
                  {currentProject.title}
                </h2>
                <ul className="flex max-w-sm flex-row flex-wrap gap-2 md:gap-4">
                  {currentProject.tags.map((tag: string) => (
                    <li
                      key={tag}
                      className="rounded-full border border-black px-3 py-1 text-xs text-black md:text-sm"
                    >
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
        className="hidden h-fit transition-all hover:-translate-x-3 hover:cursor-pointer lg:block"
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
