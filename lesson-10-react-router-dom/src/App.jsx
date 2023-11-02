import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import HomeLayout from "./HomeLayout";


const App = () => {
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Kennymas",
      date: "March 30, 2000 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat.",
    },
    {
      id: 2,
      title: "Supreme",
      date: "July 09, 1998 09:45:30 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat.",
    },
    {
      id: 3,
      title: "Rocco",
      date: "August 25, 2001 15:25:09 PM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat.",
    },
    {
      id: 4,
      title: "Hollar",
      date: "November 20, 2000 10:33:45 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quasi quidem. Temporibus perferendis asperiores a debitis! Sapiente minima quibusdam animi vero suscipit mollitia cupiditate impedit veritatis. Iste possimus vitae placeat.",
    },
  ]);


  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")


  useEffect (() => {
    const filterResult = posts.filter(post => 
      post.body.toLowerCase().includes(search.toLowerCase()) 
      || 
      post.title.toLowerCase().includes(search.toLowerCase()))
      setSearchResult(filterResult.reverse())
  }, [posts, search])

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postLists = posts.filter((post) => post.id !== id);
    setPosts(postLists);
    navigate("/");
  };

  const handleSubmit = (e) => {
      e.preventDefault(); 
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const date = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = {id, title: postTitle, date, body: postBody};
      const allPost = [...posts, newPost]
      setPosts(allPost);
      setPostTitle("");
      setPostBody("");
      navigate("/");
  };
  


  return (
    <Routes>
      <Route path="/" element={<HomeLayout search={search} setSearch={setSearch} />}>
        <Route index element={<Home posts={searchResult} />} />
        <Route path="/post">
          <Route index element={
              <NewPost 
              postTitle={postTitle} 
              setPostTitle={setPostTitle} 
              postBody={postBody} 
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
              />
              } />

          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;








// import { useEffect, useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { format } from "date-fns";

// import Home from "./Home";
// import NewPost from "./NewPost";
// import PostPage from "./PostPage";
// import Missing from "./Missing";
// import About from "./About";
// import HomeLayout from "./HomeLayout";
// import apiRequest from "./apiRequest";

// const App = () => {
//   const API_URL = "http://localhost:3900/posts";
//   const [posts, setPosts] = useState([]);
//   const [searchResult, setSearchResult] = useState([]);
//   const [search, setSearch] = useState("");
//   const [postTitle, setPostTitle] = useState("");
//   const [postBody, setPostBody] = useState("");
//   const [fetchError, setFetchError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw Error("Did not receive expected data");
//         const listItems = await response.json();
//         // console.log(listItems);
//         setPosts(listItems);
//       } catch (err) {
//         setFetchError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     setTimeout(() => {
//       (async () => fetchItems())();
//     }, 2000);
//   }, []);

//   useEffect(() => {
//     const filterResult = posts.filter(
//       (post) =>
//         post.body.toLowerCase().includes(search.toLowerCase()) ||
//         post.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setSearchResult(filterResult.reverse());
//   }, [posts, search]);

//   const navigate = useNavigate();

//   const handleDelete = async (id) => {
//     const postList = posts.filter((post) => post.id !== id);
//     setPosts(postList);
//     const deleteOptions = { method: "DELETE" };
//     const reqUrl = `${API_URL}/${id}`;
//     const result = await apiRequest(reqUrl, deleteOptions);
//     if (result) setFetchError(result);
//     navigate("/");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//     const date = format(new Date(), "MMMM dd, yyyy pp");
//     const newPost = { id, title: postTitle, date, body: postBody };
//     const allPost = [...posts, newPost];
//     setPosts(allPost);

//     const postOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPost),
//     };
//     const result = await apiRequest(API_URL, postOptions);
//     if (result) setFetchError(result);
//     setPostTitle("");
//     setPostBody("");
//     navigate("/");
//   };

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={<HomeLayout search={search} setSearch={setSearch} />}
//       >
//         <Route
//           index
//           element={
//             <Home
//               posts={searchResult}
//               isLoading={isLoading}
//               fetchError={fetchError}
//             />
//           }
//         />
//         <Route path="/post">
//           <Route
//             index
//             element={
//               <NewPost
//                 postTitle={postTitle}
//                 setPostTitle={setPostTitle}
//                 postBody={postBody}
//                 setPostBody={setPostBody}
//                 handleSubmit={handleSubmit}
//               />
//             }
//           />
//           <Route
//             path=":id"
//             element={<PostPage posts={posts} handleDelete={handleDelete} />}
//           />
//         </Route>
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<Missing />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;