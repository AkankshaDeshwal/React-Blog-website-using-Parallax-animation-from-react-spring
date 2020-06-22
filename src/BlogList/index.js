import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import blog from "../data/blogs.json";

const BlogList = (props) => {
  const posts = blog.blogs;
  return (
    <React.Fragment>
      {posts.map((post) => {
        if (post.blogImage == "") return null;

        return (
          <Card className="blogCard">
            <Card.Img src="" />
            <Card.Body>
              <Card.Title style={{ fontFamily: "'El Messiri', sans-serif" }}>
                {post.blogTitle}
              </Card.Title>
              <Card.Img
                className="cardImg"
                src={require("../images/" + post.blogImage)}
              />
              <Card.Text style={{ fontFamily: "'Delius', cursive" }}>
                {post.blogBrief}
              </Card.Text>
              <NavLink key={post.slug} to={`/blogs/${post.slug}`}>
                <button type="button" className="btn btn-primary">
                  Read more
                </button>
              </NavLink>
            </Card.Body>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default BlogList;
