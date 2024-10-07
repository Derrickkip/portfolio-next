export default function Navbar() {
    return (
        <nav className='relative md:fixed w-[48px] h-[48px] m-2 cursor-pointer select-none z-20'>
            <div className="bg-[#ffffff] w-[42px] h-[3px] absolute rounded-3xl top-[20%] left-[6.25%]"></div>
            <div className="bg-[#ffffff] w-[42px] h-[3px] absolute rounded-3xl top-[45.83%] left-[6.25%]"></div>
            <div className="bg-[#ffffff] w-[21px] h-[3px] absolute rounded-3xl top-[72.92%] right-[6.25%]"></div>
        </nav>
    )
}