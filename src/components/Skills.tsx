import { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

interface Skills {
  categories: {
    name: string
    skills: {
      name: string
      startDate: string
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

  const calculateExperience = (startDate: string) => {
    const years =
      (Date.now() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)

    // if years is not a round number return the number of years rounded down
    if (years < 1) {
      return '1-'
    } else if (years % 1 !== 0) {
      return Math.floor(years) + '+ years'
    }
    // return Math.floor(years)
  }

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
                    className="relative cursor-default rounded-full border border-black"
                  >
                    <div className="hover:bg-blur-0 bg-blur-sm h-full w-full rounded-full bg-white px-5 py-2 transition-all duration-500 hover:opacity-0">
                      <h3 className="text-xl font-light">{skill.name}</h3>
                    </div>
                    <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden break-all rounded-full ">
                      <h3 className="animate-marquee text-clip whitespace-nowrap px-2 text-xl font-light">
                        {calculateExperience(skill.startDate)}
                      </h3>
                    </div>
                    <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden break-all rounded-full ">
                      <h3 className="animate-marquee2 translate-x-full text-clip whitespace-nowrap px-2 text-xl font-light">
                        {calculateExperience(skill.startDate)}
                      </h3>
                    </div>
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
