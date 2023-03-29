//useSWR allows the use of SWR inside function components
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'

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
        <div>
          <h1>Project {pid}</h1>
          <ul>
            {/* console log data */}
            <li>Name: {project.title}</li>
            {/* <li>Language: {}</li> */}
          </ul>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </Layout>
  )
}
