import React, { useState } from 'react';

function AddPostForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)

    //这两个变量存储的一直是最新的输入框和文本框中的内容
    const onContentChanged = e =>{
        // console.log(e);
        setContent(e.target.value)
    } 

    return (
        <>
            <section>
                <h2>添加新帖子</h2>
                <form>
                    <label htmlFor="postTitle">帖子标题:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />
                    <label htmlFor="postContent">内容：</label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                    <button type="button">保存帖子</button>
                </form>
            </section>




        </>
    )
}

export default AddPostForm;
