import HackerBackground from "./components/Background";
import Index from "./components/IndexPage";
import Skills from "./components/SkillsPage";

export default function Home() {
    return (
        <div className=" items-center justify-items-center font-[family-name:var(--font-space-mono)]">
            <HackerBackground className="z-0"/>
            <Index />
            <Skills />
        </div>
    );
}
