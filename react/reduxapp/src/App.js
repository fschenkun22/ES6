import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPostForm from './features/posts/addPostForm'
import EditPostForm from './features/posts/editPostForm'
import PostsList from './features/posts/postsList'
import SinglePostPage from './features/posts/singlePostPage'
import Counter from './features/counter/counter'
import PostAuthor from './features/posts/postAuthor'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <p>第一个跟路由</p>
            <AddPostForm />
            <hr></hr>
            <PostsList />
          </>

        }>


        </Route>


        <Route path='/posts/:postId' element={<SinglePostPage />}></Route>

        <Route path = '/editPost/:postId' element={<EditPostForm/>}/>

        <Route path='/counter/' element={<Counter />} />

        {/* <Route path='/auth/' element={<PostAuthor/>}/> */}

        <Route path="*" element={404}></Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App