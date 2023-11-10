import About from "../../Components/About/About"
import Hero from "../../Components/Hero/Hero"
import News from "../../Components/News/News"
import EventsUpComing from "../../Components/EventsUpComing/EventsUpComing"
import Membership from "../../Components/Membership/Membership"
import "./Home.css"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <News />
            <Membership />
            <EventsUpComing />
        </>
    )
}

export default Home
