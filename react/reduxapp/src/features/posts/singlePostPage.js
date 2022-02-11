import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import PostAuthor from './postAuthor'
import ReactionButtons from './reactionButtons'
import { TimeAgo } from './timeAgo'

function SinglePostPage() {

    let params = useParams()
    const postId = params.postId

    const post = useSelector(
        state => state.posts.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <>
                <p>未找到数据</p>
                <Link to="/">return</Link>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date}/>
            </>
        )

    }

    return (
        <>
            <div>SinglePostPage</div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to="/">return</Link>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date}/>
            <ReactionButtons post={post} />
        </>

    )
}

export default SinglePostPage                  