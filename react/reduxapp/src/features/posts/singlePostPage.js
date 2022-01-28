import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function SinglePostPage() {

    const params = useParams()
    const post = useSelector(
        state => state.posts.find(
            post => post.id === params.postId
        )
    )
    if(!post){
        return(
            <h2>can not find this data</h2>
        )
    }

  return (
      <>
        siglepost page
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to={`/editPost/${post.id}`}>edit</Link>
      </>
  )
}

export default SinglePostPage;
