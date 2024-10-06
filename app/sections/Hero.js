import Image from "next/image";

import Button from "../components/Button";

const profPic = require('../images/derrick.jpg')

export default function Hero() {
    return (
            <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen justify-items-center p-8 pb-20 sm:p-20 z-50">
                <main className="flex flex-col md:flex-row lg:justify-between md:gap-8 row-start-2 items-center">
                    <div className="w-full h-full md:order-1 pb-8 lg:pb-0 z-50">
                        <Image src={profPic} alt="profile picture" width={200} height={200} className="w-64 h-full md:w-96 mx-auto rounded-full" />
                    </div>
                    <div className="w-full h-full z-20">
                        <h3 className="text-sm md:text-lg text-gray-500 my-2">&lt;Hello, world&gt;</h3>
                        <p className="text-xl md:text-2xl lg:text-4xl">My name is Derrick Korir. I am a fullstack software developer from Nairobi.</p>
                        <div className="mt-8 lg:mt-16">
                            <Button text={'Contact me'} />
                        </div>
                    </div>
                </main>
            </div>
    );
}