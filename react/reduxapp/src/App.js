import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostsList from './features/posts/postsList'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PostsList />
        }></Route>


      </Routes>

    </BrowserRouter>

  )
}

export default App