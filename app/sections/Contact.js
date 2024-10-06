import Button from "../components/Button"

export default function Contact() {
    return (
        <section className="relative z-10 w-full items-center justify-center overflow-hidden mt-10">
            <div className="flex flex-col justify-center min-h-screen lg:max-w-[1212.8px] mx-auto w-[90%]">
                <div className="mb-8">
                    <h3 className="text-sm md:text-lg text-gray-500">&lt;Contact&gt;</h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="text-sm md:text-lg md:w-1/2 md:pr-20">
                        <p className="mb-8">Just give me a message whenever and however you want and we will start our cooperation.</p>
                        <p className="mb-8">MY PHONE:<br /> <span className="text-xs md:text-base">+254 727 138 659</span></p>
                        <p>EMAIL:<br /> <span className="text-xs md:text-base">derrick.korir@gmail.com</span></p>
                    </div>
                    <div className="mt-12 md:mt-0 md:w-1/2 md:pl-20">
                        <form className="flex flex-col">
                            <input type="text" name="name" className="bg-[#000000] mb-10 border-b pb-2" id="name" placeholder="NAME" required></input>
                            <input type="text" name="email" className="bg-[#000000] mb-10 border-b pb-2" id="email" placeholder="EMAIL" required></input>
                            <textarea name="message" className="bg-[#000000] mb-10 border-b pb-2" id="message" placeholder="Your message" rows='5' required></textarea>
                            <div className="flex justify-end">
                                <Button text={'Submit'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}