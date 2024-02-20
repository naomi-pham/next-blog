import { IPost } from '@/constants/interfaces'
import PostCard from './PostCard'

const PostList = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-6'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
