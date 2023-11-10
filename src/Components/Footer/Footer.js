import { Btn2 } from "../Btn/Btn"
import "./Footer.css"
import img1 from "../../images/logo.png"
import { Link } from "react-router-dom"
import img2 from "../../images/wave3.svg"
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer data-aos="zoom-in" id="Contact" >
            <div className="wrapper flex flex-col gap-5" >
                <h1 className="block text-3xl font-extrabold">Contact Tiya</h1>
                <div className="flex flex-col justify-between gap items-center 10 md:flex-row">
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex gap-3 md:flex-row flex-col">
                            <input type="text" placeholder="Full Name" className="w-full" />
                            <input type="email" placeholder="Email Address" className="w-full" />
                        </div>
                        <textarea placeholder="Massage.." />
                        <Btn2 name="submit" />
                    </div>
                    <div>
                        <img className="image-map" src="https://img.freepik.com/premium-vector/grey-political-world-map-vector-isolated-illustration_175838-191.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais" alt="iamge-map" />
                    </div>
                </div>
                <div className="flex flex-col justify-evenly gap-10 md:flex-row">
                    <div>
                        <Link to="/" className="logo cursor-pointer block w-4/12 text-center m-auto  md:w-full  ">
                            <div className="flex md:text-left text-center">
                                <img src={img1} alt="logo-image" />
                                <div className="logo-name">
                                    <h3 className="font-bold">Tiya</h3>
                                    <p className="text-sm">GOLF CLUB</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-lg md:text-left text-center">Join Us</h1>
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-20  md:pb-48">
                            <div className="flex flex-col gap-2 ">
                                <div className="border-b p-3 flex items-center justify-between gap-4">
                                    <p className="text-gray-500">Mon-Fri</p>
                                    <p className="text-gray-500">6:00 AM - 6:00 PM</p>
                                </div>
                                <div className="border-b p-3 flex items-center justify-between gap-4">
                                    <p className="text-gray-500">Sat-Sun</p>
                                    <p className="text-gray-500">6:30 AM - 8:30 PM</p>
                                </div>
                                <p className="text-gray-500">
                                    Copyright © {currentYear} Tiya Golf Club
                                </p>
                            </div>
                            <div>
                                <div className="icons flex gap-3 items-center justify-center ">
                                    <a href="https://github.com/yossefsabry" target="blank"><BsFacebook className="text-xl text-blue-800 cursor-pointer hover:scale-150 transition" /></a>
                                    <a href="https://github.com/yossefsabry" target="blank"><BsGithub className=" text-xl cursor-pointer hover:scale-150 transition" /></a>
                                    <a href="https://www.linkedin.com/in/yossef-sabry-332885271/" target="blank"> <BsLinkedin className="text-xl text-gray-600 cursor-pointer hover:scale-150 transition" /></a>
                                </div>
                                <p className="text-gray-500">Design : <a href="https://github.com/yossefsabry" className="underline cursor-pointer text-blue-400 hover:text-blue-800" target="blank">yossefsabry</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={img2} alt="wave image" className="w-full absolute bottom-0 left-0 -z-10" />
        </footer>
    )
}

export default Footer
