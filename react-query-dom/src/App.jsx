import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsComponent from './components/PostsComponent';
import HomeComponent from './components/HomeComponent';
// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
    return (
        // Wrap your app in QueryClientProvider and pass the queryClient
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/posts" element={<PostsComponent />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
