import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BlogInput from './components/input'
import BlogButton from './components/button'

function App() {
  const [Blog, setBlog] = useState();

    const [blogInput, setBlogInput] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [blogImage, setBlogImage] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("");

  const addBlog = () => {
    if (blogInput == "") return alert("Add Blog");
    let obj = { title: blogInput, description: blogDescription, image: blogImage, author: blogAuthor};
    setBlog([obj]);
    setBlogInput("")
    setBlogDescription("")
    setBlogImage("")
    setBlogAuthor("")
  };


  return (
    <>
     <div>
      <BlogInput placeholder="Blog Title" value={blogInput} onChange={(e) => setBlogInput(e.target.value)} />
      <BlogInput placeholder="Blog Description" value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} />
      <BlogInput placeholder="Blog Image URL" value={blogImage} onChange={(e) => setBlogImage(e.target.value)} />
      <BlogInput placeholder="Blog Author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} />
      <BlogButton title="Update Blog" onClick={addBlog}/>
     </div>

     <div>
     {Blog && Blog.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <img src={blog.image} alt={blog.title} />
          <p>Author: {blog.author}</p>
        </div>
      ))}  
    </div>
    </>
  )
}

export default App
