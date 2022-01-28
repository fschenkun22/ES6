import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPostForm from './features/posts/addPostForm'
import EditPostForm from './features/posts/editPostForm'
import PostsList from './features/posts/postsList'
import SinglePostPage from './features/posts/singlePostPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <AddPostForm />
            <hr></hr>
            <PostsList />
          </>

        }>


        </Route>
        <Route path='/posts/:postId' element={<SinglePostPage/>}></Route>

        <Route path = '/editPost/:postId' element={<EditPostForm/>}/>

        <Route path="*" element={404}></Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App