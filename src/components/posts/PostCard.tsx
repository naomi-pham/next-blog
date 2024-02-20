import { IPost } from '@/constants/interfaces'
import trimText from '@/utils/trimText'
import Link from 'next/link'

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <article key={post.id} className="space-y-4">
      <div className="aspect-video w-full bg-neutral-silver dark:bg-neutral-white/20" />

      <div className="flex flex-col gap-2">
        <p className="text-body-3 tracking-widest text-neutral-grey dark:text-neutral-greyBlue">
          {post.datePublished}
        </p>
        <h3 className="text-heading-3 font-medium text-neutral-darkGrey dark:text-neutral-white">
          {post.title}
        </h3>
        <p className="font-light">{trimText(post.content, 100)}...</p>
        <Link href={`/posts/${post.id}`} className="custom-link">
          See more
        </Link>
      </div>
    </article>
  )
}

export default PostCard
