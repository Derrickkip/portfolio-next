import HackerBackground from "./components/Background";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

export default function Home() {
    return (
        <div className=" items-center justify-items-center font-[family-name:var(--font-space-mono)]">
            {/* <HackerBackground className="z-0"/> */}
            <Hero />
            <Skills />
        </div>
    );
}
