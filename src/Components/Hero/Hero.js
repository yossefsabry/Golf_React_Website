import "./Hero.css"
import img1 from "../../images/wave1.svg"
import img2 from "../../images/wave2.svg"
import { Btn2 } from "../Btn/Btn"
import video1 from "../../videos/For The Love Of Golf.mp4"

const Hero = () => {
    return (
        <div className="hero" data-aos="fade-right">
            <img src={img1} alt="img-one" className="img-one" />
            <div className="hero-content md:flex-row flex-col gap-4 flex items-center justify-between  ">
                <div className="flex flex-col gap-10 relative bottom-28">
                    <h1 className="text-white font-bold text-4xl md:text-6xl ">Welcome to the club <br />
                        Tiya is <em className="title-change">Lifestyle</em></h1>
                    <div className="flex gap-4 items-center">
                        <Btn2 name="Our Story" />
                        <p className="font-bold text-white">Become A Member</p>
                    </div>
                </div>
                <div className="relative bottom-28">
                    <video width="640" height="360" src={video1} className="rounded-2xl" frameBorder="0" allowFullScreen autoPlay controls></video>
                </div>
            </div>
            <img src={img2} alt="img-two" className="img-two" />
        </div>
    )
}

Hero.Pages = function (props) {
    return (
        <div className="hero" data-aos="fade-right">
            <img src={img1} alt="img-one" className="img-one" />
            <div className="hero-content md:flex-row flex-col gap-4 flex items-center justify-between  ">
                <div className="flex flex-col gap-10 relative bottom-28">
                    <h1 className="text-white font-bold text-4xl md:text-6xl ">{props.text} <em className="title-change">{props.textHighlight} </em></h1>
                    <div className="flex gap-4 items-center">
                        <Btn2 name="Learn More" />
                    </div>
                </div>
            </div>
            <img src={img2} alt="img-two" className="img-two" />
        </div>
    )
}

export default Hero
