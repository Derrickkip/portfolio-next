import Image from "next/image"
import { skills, skillAdvantages } from "../data"
import SkillCard from "../components/SkillCard"

export default function Skills() {
    return (
        <section className="relative z-10 w-full items-center justify-center overflow-hidden">
            <div className="min-h-screen lg:max-w-[1212.8px] mx-auto w-[90%]">
                <div className="mb-8">
                    <h3 className="text-sm md:text-lg text-gray-500">&lt;Skills&gt;</h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="md:w-1/2">
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-normal md:leading-[0.9em] tracking-tight lg:tracking-wide">Skills I possess as a specialist</h2>
                        <ul className="list-disc list-inside text-sm mt-8 tracking-wider">
                            <li>Backend development</li>
                            <li>Frontend development</li>
                            <li>Test Driven development</li>
                            <li>Magento E-commerce development</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 grid grid-cols-7 md:grid-cols-5 mt-16 md:mt-0">
                        {skills.softwareSkills.map((skill, index) => {
                            return (
                                <div className="w-8 md:w-10 h-10 mb-4" key={index}>
                                    <Image alt={skill.skillName} src={skill.svgIcon} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-8 md:mt-16">
                    <div>
                        <h3 className="text-sm md:text-lg text-gray-500 mb-6 lg:mb-8">&lt;Strengths&gt;</h3>
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