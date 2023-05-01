import { useEffect, useState } from 'react'
import useSWR from 'swr'

// Interfaces
import { SkillCollection } from '@/models/SkillCollection'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

// eslint-disable-next-line react/display-name
export default () => {
  const { data, error } = useSWR('/api/skillsdata', fetcher)
  const [skills, setSkills] = useState<SkillCollection>()

  // sets skills state with data from api
  useEffect(() => {
    if (data) {
      const allSkills: SkillCollection = JSON.parse(data)
      setSkills(allSkills)
    }
  }, [data])

  const calculateExperience = (startDate: string) => {
    // calculate years of experience
    const years =
      (Date.now() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)

    // if years is not a round number return the number of years rounded down
    if (years < 1) {
      return '< 1 year'
    } else if (years % 1 !== 0) {
      return Math.floor(years) + '+ years'
    }
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
                    className="relative cursor-default rounded-full border border-black bg-opacity-10 backdrop-blur-sm"
                  >
                    <div className="hover:bg-blur-0 peer h-full w-full rounded-full px-5 py-2 transition-all duration-500 hover:opacity-0">
                      <h3 className="text-lg font-light md:text-xl">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden break-all rounded-full opacity-0 transition-all duration-500 peer-hover:opacity-100 ">
                      <h3 className=" text-clip whitespace-nowrap px-2 text-lg font-light md:text-xl">
                        {calculateExperience(skill.startDate)}
                      </h3>
                    </div>
                    {/* <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden break-all rounded-full ">
                      <h3 className="animate-marquee2 translate-x-full text-clip whitespace-nowrap px-2 text-lg font-light md:text-xl">
                        {calculateExperience(skill.startDate)}
                      </h3>
                    </div> */}
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
