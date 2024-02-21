import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="container mx-auto mt-16 max-w-4xl px-6 lg:px-0">
      <h2 className="text-heading-2 text-neutral-darkGrey dark:text-neutral-white">
        About this blog
      </h2>

      <div className="mt-4 space-y-10">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nemo
          laudantium quisquam nostrum necessitatibus blanditiis quis provident
          odit aut, accusantium ullam ipsum tenetur culpa quae. Quisquam maxime
          ducimus iure, saepe quidem sit aspernatur numquam quibusdam omnis, ab
          repellat perferendis optio minima vitae vel culpa molestiae libero.
          Molestias neque cupiditate laboriosam!
        </p>
        <Image
          src="https://loremflickr.com/640/480/city"
          alt="about-image"
          width={640}
          height={480}
          className="aspect-video w-full object-cover"
        />
        <Image
          src="https://loremflickr.com/640/480/city"
          alt="about-image"
          width={640}
          height={480}
          className="aspect-video w-full object-cover"
        />
        <Image
          src="https://loremflickr.com/640/480/city"
          alt="about-image"
          width={640}
          height={480}
          className="aspect-video w-full object-cover"
        />
      </div>
    </main>
  )
}

export default AboutPage
