import Image from "next/image"
import { skills, skillAdvantages } from "../data"
import SkillCard from "../components/SkillCard"

export default function Skills() {
    return (
        <section className="relative z-10 w-full items-center justify-center overflow-hidden bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56">
            <div className="grid grid-rows-[30px_1fr_1fr] min-h-screen lg:max-w-[1212.8px] mx-auto">
                <div>
                    <h3 className="text-sm md:text-lg text-gray-500 z-50">&lt;Skills&gt;</h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-xl md:text-4xl font-bold">Skills I possess as a specialist</h2>
                        <ul className="list-disc p-6 text-sm">
                            <li>Website development</li>
                            <li>Database development</li>
                            <li>Python program development</li>
                            <li>Website parsing, automization, data filling</li>
                            <li>Chatbot development, extensive experience in Telegram</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 grid grid-cols-5 z-50">
                        {skills.softwareSkills.map((skill, index) => {
                            return (
                                <div className="w-8 md:w-10 h-10 mb-4" key={index}>
                                    <Image alt={skill.skillName} src={skill.svgIcon} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="z-50">
                    <div>
                        <h3 className="text-sm md:text-lg text-gray-500">&lt;Advantages&gt;</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {skillAdvantages.advantages.map((advantage, index) => {
                            return (
                                <SkillCard skill={advantage} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}