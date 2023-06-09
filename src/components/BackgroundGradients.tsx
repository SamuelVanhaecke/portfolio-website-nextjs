import { useEffect, useState } from 'react'
import Image from 'next/image'

// Images
import orangeGradient from '../../public/images/orange_big.webp'
import blueGradient from '../../public/images/blue_big.webp'

// eslint-disable-next-line react/display-name
export default ({ show = true }) => {
  const isBrowser = () => typeof window !== 'undefined'

  const [positions1, setPositions1] = useState({
    x: 0,
    y: 0,
  })

  const [positions2, setPositions2] = useState({
    x: 0,
    y: 0,
  })

  const getRandomXPosition = (radius: number) => {
    const randomXPosition = Math.round(
      Math.random() * window.innerWidth - radius,
    )
    return randomXPosition
  }

  const getRandomYPosition = (radius: number) => {
    const randomYPosition = Math.round(
      Math.random() * window.innerHeight - radius,
    )
    return randomYPosition
  }

  useEffect(() => {
    if (isBrowser()) {
      if (window.innerWidth < 640) {
        setPositions1({
          x: getRandomXPosition(350),
          y: getRandomYPosition(350),
        })
        setPositions2({
          x: getRandomXPosition(350),
          y: getRandomYPosition(350),
        })
      } else if (window.innerWidth < 1024) {
        setPositions1({
          x: getRandomXPosition(750),
          y: getRandomYPosition(750),
        })
        setPositions2({
          x: getRandomXPosition(750),
          y: getRandomYPosition(750),
        })
      } else {
        setPositions1({
          x: getRandomXPosition(1000),
          y: getRandomYPosition(1000),
        })
        setPositions2({
          x: getRandomXPosition(1000),
          y: getRandomYPosition(1000),
        })
      }
    }
    // const handleMouseMove = (e: any) => {
    //   setPositions1({
    //     x: e.clientX - 1000,
    //     y: e.clientY - 1000,
    //   })
    // }
    // window.addEventListener('mousemove', handleMouseMove)
    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove)
    // }
  }, [])

  return positions1.x != 0 && positions1.y != 0 ? (
    <div
      className={`${
        show ? 'fixed' : 'hidden'
      } top-0 left-0 -z-40 h-screen w-screen`}
    >
      <div
        className={`absolute h-[700px] w-[700px] sm:h-[1400px] sm:w-[1400px] lg:h-[2000px] lg:w-[2000px]`}
        style={{
          transform: `translate(${positions1.x}px, ${positions1.y}px)`,
        }}
      >
        <Image
          placeholder="blur"
          src={blueGradient}
          className="absolute"
          alt="Pixelated round blue gradient"
          quality={100}
          priority
        />
      </div>
      <div
        className={`absolute h-[700px] w-[700px] sm:h-[1400px] sm:w-[1400px] lg:h-[2000px] lg:w-[2000px]`}
        style={{
          transform: `translate(${positions2.x}px, ${positions2.y}px)`,
        }}
      >
        <Image
          placeholder="blur"
          src={orangeGradient}
          className="absolute"
          alt="Pixelated round orange gradient"
          quality={100}
          priority
        />
      </div>
    </div>
  ) : null
}
