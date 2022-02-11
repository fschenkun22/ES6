import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { postUpdated } from './postsSlice'

function EditPostForm() {

  let navigate = useNavigate()
  let params = useParams()
  const postId = params.postId
  // console.log(postId);

  const post = useSelector(state =>
    state.posts.find(
      post => post.id === postId
    )
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      navigate(`/editpost/${postId}`)
    }
  }




  return (
    <>
      <div>EditPostForm</div>

      <input
        value={title}
        onChange={onTitleChanged}
      />
      <textarea
        value={content}
        onChange={onContentChanged}
      />
      <button
      onClick={onSavePostClicked}
      >save</button>

      <Link to="/">return</Link>
    </>

  )

}
export default EditPostForm