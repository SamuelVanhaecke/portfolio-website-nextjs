// interface
export interface Project {
  id: string
  title: string
  description: string
  coverImage: string
  coverImageDimensions: {
    width: number
    height: number
  }
  projectVideo: string
  alt: string
  tags: string[]
  highlighted: boolean
  quote: string
  caroussel: {
    images: {
      src: string
      alt: string
      width: number
      height: number
    }[]
  }
}
