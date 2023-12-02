import React from 'react'
import './BlogPost.css'
import { Blogposts } from '../../data'

const BlogPost = () => {
  return (
    <>
      <section id="blog">
       {Blogposts.map((Blogpost)=>(
        <div class="blog-box" key={Blogpost.id}>
            <div class="blog-image">
                <img src={Blogpost.img} alt=""/>
            </div>
            <div class="blog-details">
                <h4>{Blogpost.heading}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aliquid magni nobis quae odio quasi voluptatem.</p>
                <a href="#">Continue Reading</a>
            </div>
            <h1>13/01</h1>
        </div>
        ))}
        </section>
    </>
  )
}

export default BlogPost
