import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar2 = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-gray-800 text-white p-4 flex justify-between items-center'>
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='bg-red-500 rounded-3xl cursor-pointer  ' >
                Return to home
            </button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='bg-red-500 rounded-3xl cursor-pointer  ' >
                Return to home
            </button>
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='bg-red-500 rounded-3xl cursor-pointer  ' >
                Return to home
            </button>
        </div>
    )
}

export default Navbar2
