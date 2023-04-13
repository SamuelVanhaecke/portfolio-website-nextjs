import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'

// Components
import Nav from '../components/Nav'
import ProjectSlider from '../components/ProjectSlider'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

// Images
import blueGradient from '../../public/images/blue_big.webp'
import orangeGradient from '../../public/images/orange_big.webp'
import line from '../../public/images/readmore_line.png'
import me from '../../public/images/me_bw.png'
import { motion } from 'framer-motion'

export default () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className="absolute top-40 -z-10 flex h-screen w-screen flex-col items-center md:top-0 md:justify-center">
          {/* <h1 className="text-center font-ilyas text-9xl uppercase"> */}
          <h1 className="mb-12 text-center font-ilyas text-6xl uppercase md:mb-20 md:text-7xl lg:text-8xl">
            Webdesign <br></br>Creative Development<br></br>Graphic Design
          </h1>
        </div>
        <Image
          className="absolute -top-80 -left-64 -z-50"
          src={orangeGradient}
          alt=""
        />
        <Image
          className="absolute -top-32 left-56 -z-40"
          src={blueGradient}
          alt=""
        />
        <div className="absolute top-0 left-0 -z-20 -mt-10 flex h-screen w-screen flex-col items-center justify-end">
          <Image src={line} alt="" className="mb-2" />
          <p className="font-light lowercase text-white">Read more</p>
        </div>
        <div className="absolute top-0 left-0 -z-30 flex h-screen w-screen flex-col items-center justify-end">
          <Image className="" src={me} alt="" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'circOut', delay: 0.1 }}
        viewport={{ once: true }}
        className="m-auto max-w-screen-2xl px-8 md:px-24 lg:px-12 xl:px-0"
      >
        <h2 className="font-ilyas text-6xl uppercase">Highlighted projects</h2>
        <ProjectSlider isVisible={true} />
      </motion.div>
    </Layout>
  )
}
