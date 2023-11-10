import "./LatestEvents.css"
import CardEvents from "../CardEvents/CardEvents"
import DataLatestEvents from "../../Data/DataLatestEvents"

const AllCardEvents = DataLatestEvents.map((card) => {
    return <CardEvents.LatestEvent key={card.id} bgWhite={card.bgWhtie} Data_day={card.Data_day} Data={card.Data} img={card.img} type={card.type} location={card.location} cost={card.cost} />
})

const LatestEvents = () => {
    return (
        <div className="latest-events">
            <h2 className="text-3xl py-5 font-bold">Latest events</h2>
            <div className="flex lg:flex-row flex-col gap-3">
                {AllCardEvents}
            </div>
        </div>
    )
}

export default LatestEvents
