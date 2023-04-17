//useSWR allows the use of SWR inside function components
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

import Layout from '@/components/Layout'

import 'swiper/css'
import 'swiper/css/navigation'

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

export default () => {
  const router = useRouter()
  const swiper = useSwiper()

  const { pid } = router.query

  const { data, error } = useSWR('/api/projectsdata', fetcher)

  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  //Handle the error state
  if (error) return <div>Failed to load</div>
  //Handle the loading state
  if (!data) return <div>Loading...</div>

  const projects: Projects = JSON.parse(data)

  // project is of the type Project
  const project = projects.find(project => project.title === pid)

  console.log(project)

  return (
    <Layout>
      {project ? (
        <div className="m-auto max-w-screen-2xl">
          <h1 className="mb-9 font-ilyas text-8xl uppercase">
            {project.title}
          </h1>
          <p className="mb-7 w-1/2">{project.description}</p>
          <div>
            {project.tags.map((tag: string) => (
              <span
                className="mr-3 rounded-full border border-black px-4 py-[5px] font-light"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="my-24 border border-black p-10">
            {project.projectVideo ? (
              <div className="relative h-0 pb-[56.25%]">
                <iframe
                  src="https://player.vimeo.com/video/817573778?h=40e940145f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  // className="h-full w-full"
                  style={{
                    position: 'absolute',
                    // top: 0,
                    // left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
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
          <div className="my-48">
            <h2 className="m-auto w-2/3 text-center font-ilyas text-6xl uppercase">
              {project.quote}
            </h2>
          </div>
          {/* TODO: fix slidesPerView Auto */}
          <div>
            {/* add 2 buttons to navigate swiper */}

            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              navigation
              pagination
            >
              <button onClick={() => swiper.slidePrev()}>Prev</button>
              {project.caroussel.images.map((image: any) => (
                <SwiperSlide key={image.src}>
                  <div className="h-[500px] w-fit border border-black p-3">
                    <Image
                      className="h-full w-auto"
                      src={image.src}
                      alt={image.alt}
                      width="600"
                      height="400"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </Layout>
  )
}
