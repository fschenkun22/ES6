import { createSlice } from "@reduxjs/toolkit";

//初始化此片段数据
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]


//定义此片段
const postsSlice = createSlice({
    name: '此名称为自定名称',
    initialState,
    reducers: {
        postAdded(state, action) {
            console.log(action.payload);
            state.push(action.payload)
        },

        postUpdated(state,action){
            const{id,title,content} = action.payload
            const existingPost = state.find(post=>post.id===id)
            if(existingPost){
                existingPost.title=title
                existingPost.content=content
            }
        }

    }
})

export const { postAdded,postUpdated } = postsSlice.actions

export default postsSlice.reducer