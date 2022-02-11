import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

//其实date给个默认值就可以 不必要非得用date-fns转换一下
const initialState = [
    { id: '1', title: 'first post', content: 'hello', date: '', reactions: { thumbsUp: 1,hooray:0 } },
    { id: '2', title: 'second post', content: 'more text', date: '',reactions: { thumbsUp: 1,hooray:0 } }
]

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers: {

            // 增加postAdd的reducer,payload为action里所有参数
            // postAdded(state, action) {
            //     state.push(action.payload)
            // },如果想事先准备一些改变，必须在prepare中进行
            postAdded: {
                reducer(state, action) {
                    console.log(action.payload);
                    state.push(action.payload)
                },
                prepare(title, content, userId) {
                    return {
                        payload: {
                            id: nanoid(),
                            title,
                            content,
                            user: userId,
                            date: new Date().toISOString(),
                            reactions:{thumbsUp: 1,hooray:0 }
                        }

                    }
                }

            },

            //增加更新帖子 postUpdated
            postUpdated(state, action) {

                const { id, title, content } = action.payload
                console.log('reducer 收到新数据', id, title, content);

                //这个existingPost是找到的state 并且是immutable
                const existingPost = state.find(
                    post => post.id === id)


                if (existingPost) {
                    existingPost.title = title
                    existingPost.content = content
                }

            },

            reactionAdded(state, action) {
                //解析出postId reaction
                const { postId, reaction } = action.payload
                const existingPost = state.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }

            }



        }
    }
)

export const { postAdded, postUpdated ,reactionAdded} = postsSlice.actions

export default postsSlice.reducer

