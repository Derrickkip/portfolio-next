import HackerBackground from "./components/Background";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
    return (
        <div className=" items-center justify-items-center font-[family-name:var(--font-space-mono)]">
            {/* <HackerBackground className="z-0"/> */}
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
