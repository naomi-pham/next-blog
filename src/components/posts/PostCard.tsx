import { IPost } from '@/constants/interfaces'
import handleText from '@/utils/handleText'
import trimText from '@/utils/trimText'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <article key={post.id} className="space-y-4">
      {post?.image ? (
        <Image
          src={post.image}
          alt={handleText(post?.title)}
          width={640}
          height={480}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="aspect-video w-full bg-neutral-silver dark:bg-white/10" />
      )}

      <div className="flex flex-col gap-2">
        {post?.datePublished ? (
          <p className="text-body-3 tracking-widest text-neutral-grey dark:text-neutral-greyBlue">
            {format(post.datePublished, 'MMM dd, yyyy')}
          </p>
        ) : (
          '-'
        )}
        <h3 className="text-heading-3 font-medium capitalize text-neutral-darkGrey dark:text-neutral-white">
          {handleText(post?.title)}
        </h3>
        <p className="font-light">
          {trimText(handleText(post?.content), 100)}...
        </p>
        <Link href={`/posts/${post.id}`} className="custom-link">
          See more
        </Link>
      </div>
    </article>
  )
}

export default PostCard
