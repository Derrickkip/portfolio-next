import Image from "next/image"

export default function SkillCard({ skill }) {
    return (
        <div className="flex flex-col items-center border p-8">
            <Image src={skill.src} alt={skill.src} />
            <p className="text-xl text-white">{skill.title}</p>
            <p className="text-sm text-gray-500">{skill.details}</p>
        </div>
    )
}