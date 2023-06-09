import React from 'react'
import Image from 'next/image'

// Components
import ProjectSlider from '../components/ProjectSlider'
import Skills from '../components/Skills'
import Layout from '../components/Layout'

// Images
import me from '../../public/images/index/me_bw.png'
import { motion } from 'framer-motion'
import meInParis from '../../public/images/index/paris_edit.png'

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className="absolute top-40 left-0 -z-10 flex h-screen w-screen flex-col items-center md:top-0 md:justify-center">
          {/* <h1 className="text-center font-ilyas text-9xl uppercase"> */}
          <h1 className="mb-12 mt-5 overflow-visible text-center font-ilyas text-5xl uppercase md:mt-0 md:mb-20 md:text-7xl lg:text-8xl">
            Webdesign <br></br>Creative Development
            <br></br>Graphic Design
          </h1>
        </div>
        {/* <Image
          className="absolute -top-80 -left-64 -z-50"
          src={orangeGradient}
          alt=""
        />
        <Image
          className="absolute -top-32 left-56 -z-40"
          src={blueGradient}
          alt=""
        /> */}
        <div className="absolute top-0 left-0 -z-20 -mt-10 flex h-screen w-screen flex-col items-center justify-end">
          <svg
            width="2"
            height="70"
            viewBox="0 0 2 70"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
            className="mb-2"
          >
            <path d="M1 0L1 70" stroke="#F8F8F9" />
          </svg>

          {/* <Image src={line} alt="" className="mb-2" /> */}
          <p className="font-light lowercase text-white">Read more</p>
        </div>
        <div className="absolute top-0 left-0 -z-30 flex h-screen w-screen flex-col items-center justify-end">
          <Image className="" priority src={me} alt="Picture of me (Samuel)" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'circOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8 pb-20 md:pb-40 lg:h-[700px] lg:flex-row lg:gap-6 lg:pb-64 xl:h-[900px]"
      >
        <motion.h2
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'circOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="xs:text-6xl font-ilyas text-5xl uppercase sm:text-7xl lg:hidden"
        >
          My name is Samuel
        </motion.h2>
        <Image
          src={meInParis}
          height={600}
          width={500}
          alt="Picture of me in front of the Arc the Triomphe"
          className="h-full w-auto border border-black p-5"
          quality={100}
        />
        <div className="flex h-full flex-col justify-between py-5">
          <motion.h2
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'circOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden font-ilyas text-7xl uppercase lg:block xl:text-9xl"
          >
            My name is Samuel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'circOut', delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl text-xl font-light leading-[130%] tracking-[2%] xl:text-2xl "
          >
            I&apos;m a graphic designer and full-stack developer from Belgium.
            My passion for art and creativity started at a young age, and I have
            since pursued a career in graphic design and full-stack development,
            where I can bring my imagination to life through visually stunning
            designs and dynamic applications. When I&apos;m not working, I enjoy
            cinema, tinkering and staying active through sports and fitness
            activities. Welcome to my website and if you have any questions,
            don&apos;t hesitate to contact me :)
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'circOut', delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h2 className="font-ilyas text-6xl uppercase">Highlighted projects</h2>
        <ProjectSlider isVisible={true} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'circOut', delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>
    </Layout>
  )
}
