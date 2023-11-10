import "./News.css"
import img1 from "../../images/wave2.svg"
import { Btn2 } from "../Btn/Btn"
import { BsNewspaper } from "react-icons/bs"
const News = () => {
    return (
        <div className="News flex items-center justify-left" data-aos="zoom-in">
            <img src={img1} className="img-new-2" alt="news" />
            <div className="wrapper relative ">
                <div className="p-5 rounded-2xl flex flex-col gap-5 bg-gray-200 card-news">
                    <h2 className="text-black font-extrabold text-4xl flex items-center gap-2">Get our newsletter <BsNewspaper /></h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore.</p>
                    <input type="text" placeholder="Email" className="py-4 px-6 rounded-full" />
                    <Btn2 name="Subscribe" />
                </div>
            </div>
            <img src={img1} alt="news" />
        </div>
    )
}

export default News
