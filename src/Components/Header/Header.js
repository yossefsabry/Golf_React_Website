import "./Header.css";
import img1 from "../../images/logo.png";
import { useContext, useState } from "react";
import Btn from "../Btn/Btn";
import { BsChevronDown } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import LoginHeader from "../LoginHeader/LoginHeader";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showPages, setShowPages] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const handleLinkClick = (index) => {
        setActiveLink(index);
        if (index === 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    };
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
        setShowPages(false);
    };

    const handleShowPages = () => {
        setShowPages(!showPages);
    };
    const handleChangePages = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setShowMenu(false);
        setShowPages(false);
    };

    const [showLogin, setShowLogin] = useState(false);
    const handleLoginShow = () => {
        setShowLogin(!showLogin)
        setShowMenu(false)
        setShowPages(false)
    }
    return (
        <>
            <header className="flex items-center justify-between py-3 text-white fixed top-0">
                <Link to="/" className="logo cursor-pointer">
                    <div className="flex text-center">
                        <img src={img1} alt="logo-image" />
                        <div className="logo-name">
                            <h3 className="font-bold">Tiya</h3>
                            <p className="text-sm">GOLF CLUB</p>
                        </div>
                    </div>
                </Link>
                <nav className="flex items-center justify-center gap-4">
                    <ul
                        className={`links-ul flex items-center justify-center gap-4 ${showMenu == true ? "show-menu" : ""
                            }`}
                    >
                        <li>
                            {" "}
                            <Link
                                to="/"
                                className={`nav-links ${activeLink === 0 ? "active" : ""}`}
                                onClick={() => handleLinkClick(0)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#About"
                                className={`nav-links ${activeLink === 1 ? "active" : ""}`}
                                onClick={() => handleLinkClick(1)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#MemberShip"
                                className={`nav-links ${activeLink === 2 ? "active" : ""}`}
                                onClick={() => handleLinkClick(2)}
                            >
                                Membership
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Contact"
                                className={`nav-links ${activeLink === 3 ? "active" : ""}`}
                                onClick={() => handleLinkClick(3)}
                            >
                                Contact Us
                            </a>
                        </li>
                        <li className="flex Pages-links  items-center gap-1 hover:text-orange-200 relative">
                            {" "}
                            <a
                                href="#"
                                className={`flex items-center  nav-links`}
                                onClick={handleShowPages}
                            >
                                <span>
                                    <BsChevronDown className="icon-links-pages cursor-pointer m-1" />
                                </span>
                                Pages
                            </a>
                            {/* pages links  */}
                            <div
                                className={`pages-links-wrapper p-4 rounded-md text-black flex flex-col gap-2 text-center bg-white ${showPages == true ? "show-pages-click" : ""
                                    }`}
                            >
                                <Link
                                    onClick={handleChangePages}
                                    to="/event-details"
                                    className={`pages-links`}
                                >
                                    Event Details
                                </Link>
                                <Link
                                    onClick={handleChangePages}
                                    to="event-listing"
                                    className={`pages-links`}
                                >
                                    Event Listing
                                </Link>
                            </div>
                            {/* pages links  */}
                        </li>
                    </ul>
                    <div onClick={handleLoginShow}>
                        <Btn name="Member Login" />
                    </div>
                </nav>
                {/* mege menu button */}
                <BsList
                    onClick={handleShowMenu}
                    color="white"
                    size={35}
                    className="burger-icon cursor-pointer font-bold "
                />
                {/* mege menu button */}

                {/* start login header */}
                <LoginHeader showLogin={showLogin} setShowLogin={setShowLogin} />
                {/* start login header */}
            </header>
        </>
    );
};


export default Header;
