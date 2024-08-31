import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

// Fetch function for PostsComponent
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
};

// PostsComponent that uses React Query
const PostsComponent = () => {
    const { 
        data, 
        error, 
        isLoading, 
        isError, 
    refetch } = useQuery('fetchPosts', fetchPosts, {
        cacheTime: 1000 * 60 * 4,
        staleTime: 1000 * 60 * 3,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <Link to="/">Go Home</Link>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default PostsComponent;
