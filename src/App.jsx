import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BlogInput from './components/input'
import BlogButton from './components/button'

function App() {
  const [Blog, setBlog] = useState([
    { title: "The Future of Web Development", description: "Exploring how modern web technologies are changing the way we build websites.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop", author: "Ali Raza", likes: 0, dislikes: 0 },
    { title: "Getting Started with JavaScript", description: "A beginner-friendly journey into JavaScript and the fundamentals of web development.", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000&auto=format&fit=crop", author: "Usman Ahmed", likes: 0, dislikes: 0 }
  ]);

    const [blogInput, setBlogInput] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [blogImage, setBlogImage] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("");

  const addBlog = () => {
    if (blogInput == "") return alert("Add Blog");
    let obj = { title: blogInput, description: blogDescription, image: blogImage, author: blogAuthor, likes: 0, dislikes: 0 };
    setBlog([...Blog, obj]);
    setBlogInput("")
    setBlogDescription("")
    setBlogImage("")
    setBlogAuthor("")
  };

const removeBlog = (indx) => {
    let arr = [...Blog];
    arr.splice(indx, 1);
    setBlog(arr);
  }

  const Likes = (indx) => {
    let arr = [...Blog];
    arr[indx].likes = arr[indx].likes + 1
    setBlog(arr);
  }

  const Dislikes = (indx) => {
    let arr = [...Blog];
    arr[indx].dislikes = arr[indx].dislikes + 1
    setBlog(arr);
  }

  return (
    <>
     <div className="blog-form">
      <BlogInput placeholder="Blog Title" value={blogInput} onChange={(e) => setBlogInput(e.target.value)} />
      <BlogInput placeholder="Blog Description" value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} />
      <BlogInput placeholder="Blog Image URL" value={blogImage} onChange={(e) => setBlogImage(e.target.value)} />
      <BlogInput placeholder="Blog Author" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} />
      <BlogButton title="Update Blog" onClick={addBlog}/>
     </div>

     <div className="blog-container">
     {Blog && Blog.map((blog, index) => (
        <div className="blog-card" key={index}>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-description">{blog.description}</p>
          <img className="blog-image" src={blog.image} alt={blog.title} />
          <p className="blog-author">Author: {blog.author}</p>

          <div className="blog-buttons">
          <button className="like-btn" onClick={() => Likes(index)}>{`Likes: ${blog.likes ? blog.likes : 0}`}</button>
          <button className="dislike-btn" onClick={() => Dislikes(index)}>{`Dislikes: ${blog.dislikes ? blog.dislikes : 0}`}</button>
          <button className="remove-btn" onClick={() => removeBlog(index)}>Remove</button>
          </div>
        </div>
      ))}  
    </div>
    </>
  )
}

export default App