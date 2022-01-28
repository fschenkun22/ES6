import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { postUpdated } from './postSlice'

function EditPostForm() {
   
    let navigate = useNavigate()
    const params = useParams()
   
    const postId = params.postId
    console.log(postId);

    const post = useSelector(
        state => state.posts.find(post => post.id === postId)
    )

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch()


    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postUpdated({ id: postId, title, content })
            )
           navigate(`/editPost/${postId}`)
     
        }
    }

    const onHomeClicked = () => {
        navigate('/')
    }

    return (<>
        <p>edit post</p>
        <form>
            <label>caption:</label>
            <input
                type="text"
                value={title}
                onChange={onTitleChanged}
            />
            <hr></hr>
            <label>content</label>
            <textarea
                value={content}
                onChange={onContentChanged}
            />
        </form>
        <button onClick={onSavePostClicked}>save data</button>
        <button onClick={onHomeClicked}>return home</button>

    </>);
}

export default EditPostForm;
