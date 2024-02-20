import GoBackButton from '@/components/common/navigation/GoBackButton'
import { PostData } from '@/constants/data'
import { IPost } from '@/constants/interfaces'

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  const paths = PostData.map((post: IPost) => ({
    params: { id: post.id.toString() },
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
  const post = PostData.find((post) => post.id.toString() === id)

  return { props: { post } }
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
            {post.datePublished} | Next Blog
          </p>
        </div>
        <div className="aspect-video w-full bg-neutral-silver dark:bg-neutral-white/20" />
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default PostPage
