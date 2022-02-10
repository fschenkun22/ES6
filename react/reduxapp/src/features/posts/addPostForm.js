import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import {postAdded} from './postsSlice' //这是action creator

function AddPostForm() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const dispatch = useDispatch()

    const onSavePostClicked = () =>{
        if(title&&content){
            //派遣post/postAdded对应reducer
            dispatch(
                postAdded(
                    {
                        id:nanoid(),
                        title,
                        content,
                        a:1
                    }
                )
            )
            setTitle('')
            setContent('')
            
        }
    }

    return (
        <>
            <div>AddPostForm</div>
            <input
                type='text'
                value={title}
                onChange={onTitleChanged}
            />

            <textarea
                value={content}
                onChange={onContentChanged}
            />

            <button onClick={onSavePostClicked}>save</button>
        </>

    )
}

export default AddPostForm