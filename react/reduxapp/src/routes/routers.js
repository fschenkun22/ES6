import { Route, Routes } from "react-router-dom";

import SinglePostPage from "../features/posts/singlePostPage";
import EditPostForm from "../features/posts/editPostForm";
import Counter from "../features/counter/counter";
import PostsList from "../features/posts/postsList";



export const noLoginRoutes = <Routes>
    <Route path="/" element={<Counter />}></Route>
</Routes>


export const userRoutes = <Routes>
    <Route path="/" element={<PostsList />}></Route>
    <Route path='/posts/:postId' element={<SinglePostPage />}></Route>

    <Route path='/editPost/:postId' element={<EditPostForm />} />

    <Route path='/counter/' element={<Counter />} />

    {/* <Route path='/auth/' element={<PostAuthor/>}/> */}

    <Route path="*" element={404}></Route>

</Routes>

