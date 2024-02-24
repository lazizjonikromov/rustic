import React from "react";
import "../../style/posts.scss";
import { Link } from "react-router-dom";
import { posts } from "../../data";

const Posts = () => {
  return (
    <div className="our-posts">
      <div className="container">
        <div className="breadcrumb">
          <Link to={"/"}>Home</Link>
          <span>/</span>
          <Link to={"/posts"}>Posts</Link>
        </div>
        
        <h1 className="title">Our Posts</h1>

        <div className="posts">
          {posts.map((item, i) => (
            <Link to={item.path} key={i} className="post-item">
              <div className="post-img">
                <img src={item.image} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <p>
                {item.createdAt} by <span>Admin</span>
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Posts;
