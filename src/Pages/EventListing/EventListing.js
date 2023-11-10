import "./EventListing.css"
import Hero from "../../Components/Hero/Hero"
import EventsUpComing from "../../Components/EventsUpComing/EventsUpComing"
import LatestEvents from "../../Components/LatestEvents/LatestEvents"

const EventListing = () => {
    return (
        <div>
            <Hero.Pages text="Event" textHighlight=" Listing" />
            <LatestEvents />
            <EventsUpComing />
        </div>
    )
}

export default EventListing
