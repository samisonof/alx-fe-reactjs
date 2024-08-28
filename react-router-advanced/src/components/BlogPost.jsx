import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
    const { Id } = useParams();
    
    return (
        <div>
            <h2>Blog Post {postId}</h2>
            {/* Fetch and display the post data based on postId */}
        </div>
    );
};

export default BlogPost;