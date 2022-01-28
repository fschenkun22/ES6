import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function PostsList() {
    const posts = useSelector(state => state.posts)
    const renderedPosts = posts.map(
        post => (
            <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>
                <p className="post-content">{post.content.substring(0, 100)}</p>
                <Link to={`/posts/${post.id}`}>View Post ditail</Link>
            </article>
        )
    )

    return (
        <>
            <section className="posts-list">
                <h2>Posts1</h2>
                {renderedPosts}
            </section>
            <hr/>
        </>

    );
}

export default PostsList;
