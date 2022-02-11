import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostAuthor from './postAuthor'
import ReactionButtons from './reactionButtons'
import { TimeAgo } from './timeAgo'

function PostsList() {

    const posts = useSelector(state => state.posts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = orderedPosts.map(
        post => (
            <>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0,100)}</p>
                <PostAuthor userId={post.user}/>
                <TimeAgo timestamp={post.date}/>
                <ReactionButtons post={post}/>
                <Link to={`/posts/${post.id}`}>view</Link>
                <br></br>
                <Link to={`/editPost/${post.id}`}>edit</Link>
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