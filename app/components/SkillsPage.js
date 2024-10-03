
export default function Skills() {
    return (
        <div className="grid grid-rows-[30px_1fr_1fr] min-h-screen  min-h-screen p-8 pb-20 sm:p-20">
            <div>
                <h3 className="text-sm md:text-lg text-gray-500">&lt;Skills&gt;</h3>
            </div>
            <div className="flex justify-between w-full">
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold">Skills I possess as a specialist</h2>
                    <ul className="list-disc p-6 text-sm">
                        <li>Website development</li>
                        <li>Database development</li>
                        <li>Python program development</li>
                        <li>Website parsing, automization, data filling</li>
                        <li>Chatbot development, extensive experience in Telegram</li>
                    </ul>
                </div>
                <div className="w-1/2">
                    <p>icons</p>
                </div>
            </div>
            <div>
                <p>Advatages</p>
            </div>
        </div>
    )
}