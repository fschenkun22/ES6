import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPostForm from './features/posts/addPostForm'
import EditPostForm from './features/posts/editPostForm'
import PostsList from './features/posts/postsList'
import SinglePostPage from './features/posts/singlePostPage'
import Counter from './features/counter/counter'
import PostAuthor from './features/posts/postAuthor'
import { noLoginRoutes, userRoutes } from './routes/routers'
import { Button } from 'antd'




function App() {
  const [isLogin,setIsLogin] = useState(false)
  const checkIsLogin = () => {
    console.log('111');
    setIsLogin(true)
  }

  return (
    <>
      <BrowserRouter>
        {isLogin ? userRoutes : noLoginRoutes}
      </BrowserRouter>
      <Button onClick={checkIsLogin}>123</Button>
    </>


  )
}

export default App