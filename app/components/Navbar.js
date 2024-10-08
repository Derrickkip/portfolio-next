'use client'
import { useState, useEffect } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(isOpen)
    })

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='z-30 relative md:fixed w-[48px] h-[48px] m-2 cursor-pointer select-none' onClick={toggleMenu}>
            <div className="bg-[#ffffff] w-[42px] h-[3px] absolute rounded-3xl md:top-[20%] md:left-[6.25%]"></div>
            <div className="bg-[#ffffff] w-[42px] h-[3px] absolute rounded-3xl md:top-[45.83%] md:left-[6.25%]"></div>
            <div className="bg-[#ffffff] w-[21px] h-[3px] absolute rounded-3xl md:top-[72.92%] md:right-[6.25%]"></div>
        </nav>
    )
}