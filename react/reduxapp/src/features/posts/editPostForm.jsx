import React from 'react'
import { useSelector } from 'react-redux'

function EditPostForm() {


  let params = useParams()
  const postId = params.postId

  const post = useSelector(
    state.post.find(
      post => post.id === postId
    )
  )              


  return (
    <div>EditPostForm</div>
  )
  

export default EditPostForm