import React, { useEffect } from 'react'
import { useState } from 'react'
import Post from '../Post/Post';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className='container py-4'>
            <div className='grid grid-cols-4 gap-4'>
                {
                    posts.map(posts =>
                        <Post
                            key={posts.id}
                            post={posts}

                        />)
                }
            </div>
        </div>
    )
}
