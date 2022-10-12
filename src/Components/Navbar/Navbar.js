import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const url = "https://cdn4.wpbeginner.com/wp-content/uploads/2019/05/apple-logo.png"
    return (
        <div className='bg-cyan-100 h-30'>
            <div className='container'>
                <div className='flex justify-between'>
                    <img className="" src={url} alt="logo" style={{ height: "70px", }} />
                    <div>
                        <ul className='list-none flex mt-1'>
                            <li className='p-3 cursor-pointer text-cyan-500 hover:text-cyan-600'>
                                <Link to={`/home`}>Home</Link>
                            </li>
                            <li className='p-3 cursor-pointer text-cyan-500 hover:text-cyan-600'>
                                <Link to={`/Posts`}>Posts</Link> </li>
                            <li className='p-3 cursor-pointer text-cyan-500 hover:text-cyan-600'>
                                <Link to={`/post`}>Post</Link> </li>
                            <li className='p-3 cursor-pointer text-cyan-500 hover:text-cyan-600'>
                                <Link to={`/restaurent`}>Restaurent</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
