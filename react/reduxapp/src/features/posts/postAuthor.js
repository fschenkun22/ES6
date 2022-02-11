//传入作者ID 展示对应信息，
//无返回Unkow

import React from 'react'
import { useSelector } from 'react-redux'

//注意这个地方传userId一定要用{}解析出来
function PostAuthor({ userId }) {
    const author = useSelector(state =>
        state.users.find(user => user.id === userId)
    )
    console.log('author:', author, userId);


    return (
        <>
            <span>by {author ? author.name : 'Unkown author'}</span>
        </>

    )
}

export default PostAuthor