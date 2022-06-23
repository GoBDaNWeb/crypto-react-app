import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div 
            
            className="flex items-center h-16 bg-gray-800 shadow-md w-full xl:px-48 px-5 text-white fixed z-50"
        >
            <Link to={'/'} className="font-bold text-3xl text-center flex">
                <span className="text-amber-500">
                    Crypto
                </span>
                Hunter
            </Link>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}
