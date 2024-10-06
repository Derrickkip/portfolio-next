import Image from "next/image"

export default function SkillCard({ skill }) {
    return (
        <div className="flex flex-col items-center border border-[#9E9E9E] p-6">
            <Image src={skill.src} alt={skill.src} width={50} className="mb-4"/>
            <p className="text-sm md:text-lg font-bold text-white pb-4">{skill.title}</p>
            <p className="text-sm text-gray-500 text-center">{skill.details}</p>
        </div>
    )
}