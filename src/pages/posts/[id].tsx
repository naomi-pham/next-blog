import GoBackButton from '@/components/common/navigation/GoBackButton'
import { IPost } from '@/constants/interfaces'
import { format } from 'date-fns'
import Image from 'next/image'

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/posts`)
  const posts = (await res.json()) as IPost[]

  const paths = posts.map((post: IPost) => ({
    params: { id: post.id },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  const id = params.id

  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/posts/${id}`)
  const post = (await res.json()) as IPost

  return { props: { post: { ...post } } }
}

const PostPage = ({ post }: { post: IPost }) => {
  return (
    <div className="container mx-auto mt-16 max-w-4xl px-6 lg:px-0">
      <GoBackButton />

      <div className="mt-10 flex flex-col gap-10">
        <div className="space-y-4">
          <h2 className="text-heading-2 text-neutral-darkGrey dark:text-neutral-white">
            {post.title}
          </h2>
          <p className="text-body-3 tracking-widest text-neutral-grey dark:text-neutral-greyBlue">
            {post?.datePublished ? (
              <span>{format(post.datePublished, 'MMM dd, yyyy')}</span>
            ) : (
              '-'
            )}{' '}
            | Next Blog
          </p>
        </div>
        {post?.image ? (
          <Image
            src={post.image}
            alt={post.title}
            width={640}
            height={480}
            className="aspect-video min-w-full object-cover"
          />
        ) : (
          <div className="aspect-video w-full bg-neutral-silver dark:bg-white/10" />
        )}
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default PostPage
