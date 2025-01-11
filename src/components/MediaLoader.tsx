import Image from 'next/image'

interface SpinnerLoaderProps {
  src: string
  width?: number,
  height?: number
  className?: string
}
const MediaLoader = ({ src, width, height, className }: SpinnerLoaderProps) => {
  return (
    <div className={className}>
      <Image src={src} alt="loader" width={width} height={height} />
    </div>
  )
}

export default MediaLoader