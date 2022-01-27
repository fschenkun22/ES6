import { createSlice } from "@reduxjs/toolkit";

//初始化此片段数据
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]


//定义此片段
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

    }
})

export default postsSlice.reducer