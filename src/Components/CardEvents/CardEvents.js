import "./CardEvents.css"
import { Btn2 } from "../Btn/Btn"
import { Link } from "react-router-dom"
import { BsLink } from "react-icons/bs"

const CardEvents = (props) => {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className={` ${props.bgWhite == true ? "bg-white py-8 px-5 rounded-2xl" : " "}  flex lg:flex-row flex-col text-center items-start  justify-evenly  gap-3 w-full py-6 overflow-hidden`} data-aos="zoom-in" >
            <div className="card-data-container flex flex-col items-center justify-center py-14  rounded-2xl m-auto w-full md:w-1/3">
                <h1 className="text-2xl  font-bold">{props.Data_day}</h1>
                <p className="text-xl font-bold text-white">{props.Data}</p>
            </div>
            <Link to="/event-listing" onClick={handleLinkClick}>
                <div className=" image-wrapper-events overflow-hidden rounded-xl flex items-center justify-center">
                    <img src={props.img} alt="image" className=" rounded-xl m-auto text-center  transition hover:scale-110 cursor-pointer" />
                    <p className="Events-icon"><BsLink /></p>
                </div>
            </Link>
            <div className="flex flex-col items-start justify-between gap-3">
                <Link to="/event-listing">
                    <h2 className="text-3xl font-bold text-gray-600 text-center w-full hover:text-orange-300 transition cursor-pointer">{props.type}</h2>
                </Link>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex items-center lg:flex-row flex-col justify-between gap-5 w-full">
                    <div className="flex flex-col items-start">
                        <div className="flex flex-row gap-3 items-center justify-between">
                            <p className="">Location: </p>
                            <p className="text-gray-400">{props.location}</p>
                        </div>
                        <div className="flex  flex-row gap-3 items-center justify-between">
                            <p className="">cost: </p>
                            <p className="text-gray-400">{props.cost}</p>
                        </div>
                    </div>
                    <Link to="/event-listing" onClick={handleLinkClick}>
                        <Btn2 name="Buy Ticket" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

CardEvents.LatestEvent = function (props) {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className={` flex  flex-col text-center items-start  justify-evenly  gap-3 w-full py-6 overflow-hidden`} data-aos="zoom-in" >
            <Link to="/event-listing" onClick={handleLinkClick}>
                <div className=" image-wrapper-events relative  overflow-hidden flex items-center justify-center">
                    <img src={props.img} alt="image" className="  m-auto text-center  transition hover:scale-110 cursor-pointer" />
                    <p className="Events-icon"><BsLink /></p>
                    <div className="card-data-container flex gap-1 items-center justify-center m-auto absolute w-2/4 p-3 bottom-0 left-0">
                        <h1 className="text-xl  font-bold">{props.Data_day}</h1>
                        <p className="text-xl font-bold text-white">{props.Data}</p>
                    </div>
                    <button className="absolute w-2/4 bottom-0 right-0 p-3 text-xl bg-orange-300 text-white">By Ticket</button>
                </div>
            </Link>
            <div className="flex flex-col items-start justify-between gap-3">
                <Link to="/event-listing">
                    <h2 className="text-3xl font-bold text-gray-600 text-center w-full hover:text-orange-300 transition cursor-pointer">{props.type}</h2>
                </Link>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <div className="flex items-center lg:flex-row flex-col justify-between gap-5 w-full border-t py-4">
                    <div className="flex flex-col items-start">
                        <div className="flex flex-row gap-3 items-center justify-evenly">
                            <p className="">Location: </p>
                            <p className="text-gray-400">{props.location}</p>
                        </div>
                        <div className="flex  flex-row gap-3 items-center justify-evenly">
                            <p className="">cost: </p>
                            <p className="text-gray-400">{props.cost}</p>
                        </div>
                    </div>
                    <Link to="/event-listing" onClick={handleLinkClick}>
                        <Btn2 name="Buy Ticket" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardEvents
