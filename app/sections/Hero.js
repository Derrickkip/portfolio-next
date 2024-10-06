import Image from "next/image";

import Button from "../components/Button";

const profPic = require('../images/derrick.jpg')

export default function Hero() {
    return (
        <section className="relative flex z-10 w-full items-center justify-center overflow-hidden">
            <div className="flex items-center min-h-screen lg:max-w-[1212.8px] mx-auto w-[90%]">
                <main className="flex flex-col md:flex-row lg:justify-between md:gap-8  items-center">
                    <div className="w-full h-full md:order-1 pb-8 lg:pb-0">
                        <Image src={profPic} alt="profile picture" width={200} height={200} className="w-64 h-full md:w-96 mx-auto rounded-full" />
                    </div>
                    <div className="w-full h-full flex flex-col">
                        <h3 className="text-sm md:text-lg text-gray-500 mb-6 lg:mb-8">&lt;Hello, world&gt;</h3>
                        <p className="text-xl md:text-2xl lg:text-4xl font-bold leading-normal md:leading-[0.9em] tracking-tight lg:tracking-wide">My name is Derrick Korir. I am a fullstack software developer from Nairobi.</p>
                        <div className="mt-8 lg:mt-16">
                            <Button text={'Contact me'} />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}