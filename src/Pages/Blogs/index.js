import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "../../Header";
import blog from "../../data/blogs.json";

const Blogs = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogTitle: "",
    blogContent: "",
    blogImage: "",
    blogQuote: "",
    blogBrief: "",
    blogAuthor: "",
    blogPostedOn: "",
    slug: "",
    blogColor: "",
  });

  //const [postSlug, setPostSlug] = useState("");

  useEffect(() => {
    const postSlug = props.match.params.slug;
    const post = blog.blogs.find((post) => post.slug == postSlug);
    setPost(post);
    //setPostSlug(slug);
  }, [post, props.match.params.slug]);

  if (post.blogImage == "") return null;
  return (
    <React.Fragment>
      <div className="blog">
        <Header />
        <div className="my-4 blogColumn">
          <div className="my-4 blogQuote ">{post.blogQuote}</div>
          <div className="blogBox">
            <div className="container blogContent">
              <h1 style={{ fontFamily: "'El Messiri', sans-serif" }}>
                {post.blogTitle}
              </h1>

              <br />
              <br />

              <p>{post.blogContent}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blogs;
