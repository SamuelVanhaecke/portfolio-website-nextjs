import React from 'react'
import Image from 'next/image'

// Components
import Nav from '../components/Nav'
// import ProjectSlider from "../components/ProjectSlider";
import Footer from '../components/Footer'

// Images
import blueGradient from '../../public/images/blue_big.png'
import orangeGradient from '../../public/images/orange_big.png'
import line from '../../public/images/readmore_line.png'
import me from '../../public/images/me_bw.png'

export default () => {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <div className="h-screen">
        <div className="absolute top-0 -z-10 flex h-screen w-screen flex-col items-center justify-center">
          <h1 className="text-3x1 text-center font-ilyas text-9xl uppercase">
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
      <div className="m-auto -mt-0 max-w-screen-2xl">
        <h2 className="font-ilyas text-6xl uppercase">Highlighted projects</h2>
        {/* <ProjectSlider /> */}
      </div>
      <Footer />
    </main>
  )
}
