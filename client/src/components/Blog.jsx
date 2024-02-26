// src/components/BlogPage.js
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
