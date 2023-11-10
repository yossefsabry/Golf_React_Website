import { Link } from "react-router-dom"
import { Btn2 } from "../Btn/Btn"
import "./LoginHeader.css"
import { BsX } from "react-icons/bs"
import img1 from "../../images/wave1.svg"
const LoginHeader = (props) => {
    const hiddenLogin = () => {
        props.setShowLogin(false)
    }
    return (
        <div className={`flex-col login-header fixed top-0 right-0 h-full  w-4/12 flex ${props.showLogin === true ? "login-header-show" : ""}`}>
            <div className="p-5">
                <div className="flex gap-4 justify-between items-center">
                    <h2>Member Login</h2>
                    <p onClick={hiddenLogin}>{<BsX className="font-bold text-2xl cursor-pointer hover:text-red-500" />}</p>
                </div>
                <div className="mt-10">
                    <label className="m-1">Membership No.</label>
                    <input className="w-full my-1 py-2 px-4 rounded-lg" type="text" placeholder="name.." required />
                </div>
                <div className="mt-4">
                    <label className="m-1">Password</label>
                    <input className="w-full my-1 py-2 px-4 rounded-lg" type="password" placeholder="Password.." required />
                </div>
                <div className="mt-2 mb-12 ">
                    <input className="cursor-pointer my-1 py-2 px-4 rounded-lg" type="checkbox" />
                    <span className="m-1">remember me..</span>
                </div>
                <Link to="/" className="block w-full text-center">
                    <Btn2 name="submit" />
                </Link>
                <a href="/" className="text-center my-10 underline cursor-pointer hover:text-orange-200">Forgotten Password</a>
                <div className="flex items-center justify-between my-10 flex-col md:flex-row">
                    <h3>Any Questions? </h3>
                    <a href="https://github.com/yossefsabry" className="text-center my-5 underline cursor-pointer hover:text-orange-200" target="blank">yossefsabry </a>
                </div>
            </div>
            <img src={img1} alt="image_user" className="bottom-0 absolute" />
        </div>
    )
}

export default LoginHeader
