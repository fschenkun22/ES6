import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {postAdded} from './postsSlice' //这是action creator

function AddPostForm() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId,setUserId] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const dispatch = useDispatch()

    const users = useSelector(state=>state.users)

    const onSavePostClicked = () =>{
        if(title&&content){
            //派遣post/postAdded对应reducer
            // dispatch(
            //     postAdded(
            //         {
            //             id:nanoid(),
            //             title,
            //             content,
            //             a:1
            //         }
            //     )
            // )//如果要在reducer中prepare中增加可变变量，不必发送整个对象，只发送有用关键信息即可

            dispatch(postAdded(title,content,userId))
            setTitle('')
            setContent('')
            
        }
    }

    const canSave = Boolean(title)&& Boolean(content) && Boolean(userId)

    const usersOptions = users.map(
        user => (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    )

    return (
        <>
            <div>AddPostForm</div>
            <input
                type='text'
                value={title}
                onChange={onTitleChanged}
            />

            <select
                value={userId} onChange={onAuthorChanged}
            >
                <option value=''></option>
                {usersOptions}
            </select>

            <textarea
                value={content}
                onChange={onContentChanged}
            />

            <button onClick={onSavePostClicked} disabled={!canSave}>save</button>
        </>

    )
}

export default AddPostForm