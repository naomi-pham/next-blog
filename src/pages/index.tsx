import PostList from '@/components/posts/PostList'
import { IPost } from '@/constants/interfaces'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps = (async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/posts`)
  const posts = await res.json() as IPost[]

  return { props: { posts } }
}) satisfies GetServerSideProps<{ posts: IPost[] }>

export default function Home({
  posts,
}: {
  posts: InferGetServerSidePropsType<typeof getServerSideProps>
}) {
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
