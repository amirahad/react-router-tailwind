import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

export default function PostDetails() {
    const { postId } = useParams();
    const [singlePost, setSinglePost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePost(data))
    }, [postId])
    return (
        <div>
            <h1>Post Details: {singlePost.id}</h1>
            <p>{singlePost.title}</p>
            <p><small>{singlePost.body}</small></p>
        </div>
    )
}
