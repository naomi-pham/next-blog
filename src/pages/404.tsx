import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <main className="container mx-auto mt-16 max-w-4xl px-6 lg:px-0">
      <p className="mb-4">Oops! Page Not Found.</p>
      <Link
        href="/"
        className="text-heading-4 text-neutral-darkGrey underline dark:text-neutral-white"
      >
        Go back home
      </Link>
    </main>
  )
}

export default ErrorPage
