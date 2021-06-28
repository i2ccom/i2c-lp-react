import React from "react";

export default 
function BlogGrid(props){
  return (
    <div>
    {props.blogs.map(blog=>
      BlogMiniView(blog)
    )}
    </div>
  )
}

function BlogMiniView(blog) {
  return <div key={blog.id}>
    <h3>{blog.title}</h3>
    <div>
      {blog.summary}
    </div>
  </div>;
}
