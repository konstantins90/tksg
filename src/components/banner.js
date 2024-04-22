import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Banner() {
  return (
    <div id="banner" class="-mt-24 relative w-full h-40 py-12 px-12">
        <StaticImage
            src="../images/home-3.jpg"
            alt="SSR"
            placeholder="blurred"
            layout="constrained"
            width={1980}
            height={80}
            quality={10}
            imgStyle={{ 'object-position': 'right center' }}
            objectFit="cover"
            class="w-full h-full absolute inset-0 object-cover"
        />
        <div class="w-full h-full absolute inset-0 img-overlay dark smooth"></div>
    </div>
  )
}