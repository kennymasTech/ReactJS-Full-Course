import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import HomeLayout from './HomeLayout';



const App = () => {

  const [search, setSearch] = useState("")
  const [posts, setPosts] = useState([
    
    {
      id: 1,
      title: "Kennymas",
      date: "March 30, 2000 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat."
    },
    {
      id: 2,
      title: "Supreme",
      date: "July 09, 2005 09:45:30 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat."
    },
    {
      id: 3,
      title: "Rocco",
      date: "August 25, 2001 15:25:09 PM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat."
    },
    {
      id: 4,
      title: "Hollar",
      date: "November 20, 2004 10:33:45 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat."
    }
  ])

  const [searchResult, setSearchResult] = useState([])

  return (
      <Routes >
        <Route path='/' element={<HomeLayout />} >
            <Route index element={<Home posts={posts} />} />
            <Route path='/post' element={<NewPost />} >
                <Route path=':id' element={<PostPage />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Missing />} />
        </Route>
      </Routes>


  )
}

export default App
