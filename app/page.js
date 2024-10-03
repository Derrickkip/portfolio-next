import Index from "./components/IndexPage";
import Skills from "./components/SkillsPage";

export default function Home() {
    return (
        <div className=" items-center justify-items-center font-[family-name:var(--font-space-mono)]">
            <Index />
            <Skills />
        </div>
    );
}
