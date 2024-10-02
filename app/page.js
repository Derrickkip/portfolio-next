import Image from "next/image";

import Button from "./components/Button";

const profPic = require('./images/derrick.jpg')

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-space-mono)]">
            <main className="flex flex-col md:flex-row lg:justify-between md:gap-8 row-start-2 items-center">
                <div className="w-full h-full md:order-1 pb-8 lg:pb-0">
                    <Image src={profPic} alt="profile picture" width={200} height={200} className="w-64 h-full md:w-96 mx-auto rounded-full" />
                </div>
                <div className="w-full h-full">
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
