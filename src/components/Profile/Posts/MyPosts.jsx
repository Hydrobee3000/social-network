import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <Post message='hi' likesCount='3' />
      <Post message='hello' likesCount='14' />
    </div>
  )
}
export default MyPosts