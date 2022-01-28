import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postSlice'


function AddPostForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)

    //这两个变量存储的一直是最新的输入框和文本框中的内容
    const onContentChanged = e =>{
        // console.log(e);
        setContent(e.target.value)
    } 


    const onSavePostClicked = () =>{
        if(title && content) {
            //派遣的数据
            dispatch(
                postAdded({
                    id:nanoid(),
                    title,
                    content
                })
            )
        } 
        setTitle('')
        setContent('')
    }



    return (
        <>
            <section>
                <h2>addcomment</h2>
                <form>
                    <label htmlFor="postTitle">cap:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />
                    <label htmlFor="postContent">contant：</label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                    <button type="button" onClick={onSavePostClicked}>save</button>
                </form>
            </section>




        </>
    )
}

export default AddPostForm;
