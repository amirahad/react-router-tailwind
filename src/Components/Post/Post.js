import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Post(props) {
    const { title, id } = props.post;
    const history = useHistory()
    const handleClick = () => {
        const url = `/post/${id}`;
        history.push(url)
    }
    return (
        <div className='border-2 rounded border-cyan-500 p-3 hover:scale-90 transition delay-150 duration-300 ease-in-out text-center'>
            <p>{title}</p>
            {/* <Link to={`/post/${id}`} > <button>See More</button> </Link> */}
            <button className='rounded bg-cyan-600 p-3' onClick={handleClick}>Details</button>
        </div>
    )
}
