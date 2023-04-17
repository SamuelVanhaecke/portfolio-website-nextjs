import { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

interface Skills {
  categories: {
    name: string
    skills: {
      name: string
      level: string
    }[]
  }[]
}

export default () => {
  const { data, error } = useSWR('/api/skillsdata', fetcher)
  const [skills, setSkills] = useState<Skills>()

  useEffect(() => {
    if (data) {
      const allSkills: Skills = JSON.parse(data)
      setSkills(allSkills)
      console.log(allSkills)
    }
  }, [data])

  return (
    <div className="my-28 flex flex-wrap justify-center gap-16 md:my-64">
      {skills?.categories.map(category => {
        return (
          <div key={category.name} className="flex w-96 flex-col items-center">
            <h2 className="font-ilyas text-5xl uppercase">{category.name}</h2>
            <div className="mt-11 flex flex-wrap justify-center gap-x-2 gap-y-3">
              {category.skills.map(skill => {
                return (
                  <div
                    key={skill.name}
                    className="rounded-full border border-black px-5 py-2"
                  >
                    <h3 className="text-xl font-light">{skill.name}</h3>
                    {/* <p>{skill.level}</p> */}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
