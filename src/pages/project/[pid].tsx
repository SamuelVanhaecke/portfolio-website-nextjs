//useSWR allows the use of SWR inside function components
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Layout from '@/components/Layout'

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
      width: number
      height: number
    }[]
  }
}

type Projects = Project[]

export default () => {
  const router = useRouter()

  const { pid } = router.query

  const { data, error } = useSWR('/api/projectsdata', fetcher)

  // Image slider
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderLoaded, setSliderLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 'auto', spacing: 24 },
      mode: 'free',
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setSliderLoaded(true)
      },
    },
    [
      // add plugins here
    ],
  )

  //Handle the error state
  if (error) return <div>Failed to load</div>
  //Handle the loading state
  if (!data) return <div>Loading...</div>

  const projects: Projects = JSON.parse(data)

  // project is of the type Project
  const project = projects.find(project => project.title === pid)

  return (
    <Layout>
      {project ? (
        <div className="m-auto max-w-screen-2xl px-8 md:px-16 xl:px-28 2xl:px-0">
          <h1 className="mb-9 font-ilyas text-8xl uppercase">
            {project.title}
          </h1>
          <p className="mb-7 w-full md:w-2/3 xl:w-1/2">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string) => (
              <span
                className="rounded-full border border-black px-4 py-[5px] font-light"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="my-24 border border-black p-4">
            {project.projectVideo ? (
              <div className="relative h-0 pb-[56.25%]">
                <iframe
                  src={project.projectVideo}
                  // className="h-full w-full"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="3DEV_PPP_vanhaeckeSamuel_mov-to-show-off"
                ></iframe>
              </div>
            ) : (
              <Image
                className="w-full"
                src={project.coverImage}
                alt={project.alt}
                width={project.coverImageDimensions.width}
                height={project.coverImageDimensions.height}
              />
            )}
          </div>
          <div className="my-24 md:my-48">
            <h2 className="m-auto w-full text-center font-ilyas text-5xl uppercase md:w-3/4 md:text-7xl lg:w-2/3">
              {project.quote}
            </h2>
          </div>
          <div>
            {sliderLoaded && instanceRef.current && (
              <div className="mb-6 flex items-center justify-end gap-3">
                <svg
                  width="20"
                  height="42"
                  viewBox="0 0 14 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  className="transition-transform hover:cursor-pointer sm:hover:-translate-x-1"
                >
                  <path d="M13 41L1 21L13 1" stroke="#27272B" />
                </svg>
                <p className="w-3 text-center text-xl font-light">
                  {currentSlide + 1}
                </p>
                <svg
                  width="11"
                  height="27"
                  viewBox="0 0 11 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 1L1 26" stroke="#27272B" />
                </svg>
                <p className="w-3 text-center text-xl font-light">
                  {instanceRef.current.track.details.slides.length}
                </p>
                <svg
                  width="14"
                  height="42"
                  viewBox="0 0 14 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  className="transition-transform hover:cursor-pointer sm:hover:translate-x-1"
                >
                  <path d="M1 1L13 21L1 41" stroke="#27272B" />
                </svg>
              </div>
            )}
            {/* TODO: make responsive */}
            <div ref={sliderRef} className="keen-slider max-h-[500px]">
              {project.caroussel.images.map((image: any) => (
                <div
                  className={`keen-slider__slide`}
                  style={{
                    minWidth: image.width,
                    maxWidth: image.width,
                    // '@media (min-width: 768px)': {
                    //   minWidth: image.width,
                    //   maxWidth: image.width,
                    // },
                  }}
                  key={image.src}
                >
                  <Image
                    className="h-full w-auto"
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </Layout>
  )
}
