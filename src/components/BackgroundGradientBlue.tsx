import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import blueGradient from '../../public/images/blue_big.webp'

// eslint-disable-next-line react/display-name
export default () => {
  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - 2000),
    y: Math.random() * (window.innerHeight - 2000),
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 2000),
        y: Math.random() * (window.innerHeight - 2000),
      })
    }, 15000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="fixed -z-40 h-screen w-screen">
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ duration: 15 }}
        className="absolute h-[2000px]  w-[2000px]"
      >
        <Image src={blueGradient} className="absolute" alt="" />
      </motion.div>
    </div>
  )
}
