/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import Image from "next/image"

interface AppImageProps {
  src: string
  alt?: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  [key: string]: any
}

function AppImage({
  src,
  alt = "Image Name",
  className = "",
  width,
  height,
  fill = false,
  priority = false,
  ...props
}: AppImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc("/assets/images/no_image.png")
      setHasError(true)
    }
  }

  // If using fill, don't pass width/height
  if (fill) {
    return (
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        fill
        className={className}
        onError={handleError}
        priority={priority}
        {...props}
      />
    )
  }

  // For regular images, provide default dimensions if not specified
  const imageWidth = width || 600
  const imageHeight = height || 400

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={imageWidth}
      height={imageHeight}
      className={className}
      onError={handleError}
      priority={priority}
      {...props}
    />
  )
}

export default AppImage
