import PostList from '@/components/posts/PostList'
import { IPost } from '@/constants/interfaces'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Error from 'next/error'

export const getStaticProps = (async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/posts`)
  const errorCode = res.ok ? false : res.status
  const posts = (await res.json()) as IPost[]

  return { props: { errorCode, posts }, revalidate: 60 }
}) satisfies GetStaticProps<{
  errorCode: number | boolean
  posts: IPost[]
}>

export default function Home({
  errorCode,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <main className="container mx-auto mt-16 max-w-4xl px-6 lg:px-0">
      <h2 className="text-heading-2 text-neutral-darkGrey dark:text-neutral-white">
        Recent posts
      </h2>

      {Array.isArray(posts) && posts?.length > 0 ? (
        <PostList posts={posts} />
      ) : null}
    </main>
  )
}
