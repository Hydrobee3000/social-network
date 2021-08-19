import { React, Component } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validarors'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

class MyPosts extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    console.log('rerender')
    let postsElements = this.props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

    // let newPostElement = React.createRef()

    const onAddPost = (values) => {
      this.props.addPost(values.newPostText)
    }

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>{postsElements}</div>
      </div>
    )
  }
}

export default MyPosts
