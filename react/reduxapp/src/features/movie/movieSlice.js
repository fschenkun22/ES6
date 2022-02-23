import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { increment } from "../counter/counterSlice";



const loadMoviesAPI = () => {
    const res = axios('http://127.0.0.1:65500/test')
    console.log(res);
    return res
}

export const loadData = createAsyncThunk(
    'movie/loadData',
    async()=>{
        const res = await loadMoviesAPI()
        // console.log(res.data);
        return res.data
    }
)


export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        list: [],
        totals: 0,
        movieGetStatus:false,
        movieGetErr:false
    },
    reducers: {
        loadDateEnd(state, { payload }) {
            state.list = payload
            state.totals = payload.length
        }
    },
    extraReducers: {
        //其他星球只要出发increment方法就会引发这个action
        [increment](state, payload) {
            state.list.push(1)
            state.totals += 1
        },

        [loadData.fulfilled](state,{payload}){
            state.movieGetErr = false
            state.movieGetStatus = false
            console.log('请求完毕',payload);

        },
        [loadData.rejected](state,err){
            state.movieGetErr = true
            state.movieGetStatus = false
            console.log('请求错误',err);
        },
        [loadData.pending](state){
            state.movieGetStatus = true
            console.log('请求中');
        }


    }
})

export const { loadDateEnd } = movieSlice.actions
export default movieSlice.reducer