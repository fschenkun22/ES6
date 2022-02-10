import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function PostsList() {

    const posts = useSelector(state => state.posts)

    const renderPosts = posts.map(
        post => (
            <>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0,100)}</p>
                <Link to={`/posts/${post.id}`}>view</Link>
                <hr/>
            </>
        )
    )



    return (
        <>
        <div>postslist</div>
        {renderPosts}
        </>
    )
}

export default PostsList