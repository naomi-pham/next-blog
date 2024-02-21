import GoBackButton from '@/components/common/navigation/GoBackButton'
import { IPost } from '@/constants/interfaces'
import handleText from '@/utils/handleText'
import { format } from 'date-fns'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'

export const getServerSideProps = (async (context) => {
  const { id } = context.query

  if (typeof id !== 'string') {
    return {
      notFound: true,
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/posts/${id}`)
  const post = (await res.json()) as IPost

  return { props: { post } }
}) satisfies GetServerSideProps<{ post: IPost }>

const PostPage = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="container mx-auto mt-16 max-w-4xl px-6 lg:px-0">
      <GoBackButton />

      <div className="mt-10 flex flex-col gap-10">
        <div className="space-y-4">
          <h2 className="text-heading-2 text-neutral-darkGrey dark:text-neutral-white">
            {handleText(post.title)}
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
            alt={handleText(post.title)}
            width={640}
            height={480}
            className="aspect-video min-w-full object-cover"
          />
        ) : (
          <div className="aspect-video w-full bg-neutral-silver dark:bg-white/10" />
        )}
        <p>{handleText(post.content)}</p>
      </div>
    </div>
  )
}

export default PostPage
