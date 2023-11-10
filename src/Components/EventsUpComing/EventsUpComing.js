import "./EventsUpComing.css"
import CardEvents from "../CardEvents/CardEvents"
import DataCardEvent from "../../Data/CardEventsData"

const EventsUpComing = () => {
    const AllCardEvents = DataCardEvent.map((card) => {
        return <CardEvents key={card.id} bgWhite={card.bgWhtie} Data_day={card.Data_day} Data={card.Data} img={card.img} type={card.type} location={card.location} cost={card.cost} />
    })
    return (
        <div className="events-coming w-full py-6 relative">
            <div className="wrapper w-full">
                <h1 className="text-4xl font-bold mb-5 py-10"> Upcoming Events</h1>
                <div className="flex flex-col gap-10 ">
                    {AllCardEvents}
                </div>
            </div>

        </div >
    )
}

export default EventsUpComing
