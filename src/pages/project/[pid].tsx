//useSWR allows the use of SWR inside function components
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'

import Layout from '@/components/Layout'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

export default () => {
  const router = useRouter()
  const { pid } = router.query

  const { data, error } = useSWR('/api/staticdata', fetcher)

  //Handle the error state
  if (error) return <div>Failed to load</div>
  //Handle the loading state
  if (!data) return <div>Loading...</div>

  const projects = JSON.parse(data)

  const project = projects.find((project: any) => project.title === pid)

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
            <Image
              className="w-full"
              src={project.image}
              alt={project.alt}
              width={project.width}
              height={project.height}
            />
          </div>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </Layout>
  )
}
