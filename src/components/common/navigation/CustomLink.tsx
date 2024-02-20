import Link from 'next/link'

const CustomLink = ({ url, title }: { url: string; title: string }) => {
  return (
    <Link
      href={url}
      className="text-heading-4 capitalize text-neutral-darkGrey underline hover:opacity-80 dark:text-neutral-white"
    >
      {title}
    </Link>
  )
}

export default CustomLink
