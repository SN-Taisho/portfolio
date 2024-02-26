import Landing from "../sections/Landing"
import Stats from "../sections/Stats"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import RecentProjects from "../sections/Recent-Projects"

export default function Home() {
    return (
        <main>
            <Landing />
            <Stats />
            <AboutMe />
            <Skills />
            <RecentProjects />
        </main>
    )
}