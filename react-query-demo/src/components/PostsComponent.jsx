import React from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery(['posts'], fetchPosts, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,  // Data stays fresh for 5 seconds before becoming stale
    cacheTime: 300000, // Cache data for 5 minutes
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
