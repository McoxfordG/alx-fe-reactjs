import React from 'react'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/posts">View Posts</Link>
    </div>
  )
};
export default HomeComponent;