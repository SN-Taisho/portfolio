import Landing from "../sections/Landing"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import RecentProjects from "../sections/Recent-Projects"

export default function Home() {
    return (
        <main>
            <Landing />
            <AboutMe />
            <Skills />
            <RecentProjects />
        </main>
    )
}