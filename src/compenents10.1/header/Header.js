import { Link } from "react-router-dom";
import "./Header.css";
import { BiLogIn } from "react-icons/bi"
import logo from "./logoTT.png";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { MdSupportAgent } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
export default function Header() {
    const { handle_iconmenu3, check, setCheck, show, setShow, cart, navbar, handle_iconmenu2 } = useContext(AppContext);
    return (
        <div className="header">
            <div className="header-menu1">
                <div className="menu1-start1">
                    <div className="menu1-imgles1">
                        <img src={logo} />
                    </div>
                    <div className="menu1-phone">
                        <span style={{ fontSize: "50px" }}><MdSupportAgent /></span>
                        <h5 style={{ fontSize: "16px", fontWeight: "900" }}>
                            <span style={{ fontSize: "12px", marginLeft: "5px", fontWeight: "100" }}>Call Customer Services :</span>
                            <br />
                            +84-0123-456-789
                        </h5>
                    </div>
                </div>
                <div className="menu1-start2">
                    <div className="menu1-text">
                        <form className="menu1-form">
                            <a href="#"><FaSearch /></a>
                            <input type="text" placeholder="Search Product" />
                        </form>
                    </div>
                    <div className="menu1-icons">
                        <div className="menu1-1icons">

                            <span style={{ color: "#000" }}
                                onClick={handle_iconmenu3}>
                                <IoMdContact /></span>

                            <span><GiSelfLove /></span>
                            <div className={`menu1-menu ${check ? 'active10' : ''}`}>
                                <Link className="p-manu1" to="/SignIn" onClick={handle_iconmenu3}>SignIn</Link>
                                <Link className="p-manu1" to="/SignUp" onClick={handle_iconmenu3}>SignUp</Link>
                            </div>
                        </div>
                        <div className="menu1-2icons">
                            <h5>
                                My Cart:
                                <br />
                                {/* $0.00 usd */}
                            </h5>
                            <Link to="/cart" style={{fontSize:"25px",color:"#000"}}><HiOutlineShoppingCart /><sup style={{ fontSize: "12px", color: "red" }}>{cart.length}</sup></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`header-menu3-navbar ${navbar ? 'header-menu3-navbar' : 'actives'}`}>
                <div className={`header-menu2`}>
                    <div className="menu2-start">
                        <Link className="pth1" to="/home">Home</Link>
                        <Link className="pth1" to="/ProductList">Shop</Link>
                        <Link className="pth1" to="/Blog">Blog</Link>
                        <Link className="pth1" to="/Evaluate">Order Lookup</Link>
                        <Link className="pth1" to="/Video">Video</Link>
                    </div>
                    <div className="menu2-end">
                        <button style={{ fontFamily: "none" }} className="toggle-menu" onClick={handle_iconmenu2}>
                            <i className={`${show ? 'fas fa-times' : 'fas fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
                <div className={`header-menu3 ${show ? 'header-menu3' : 'active3'}`}>
                    <Link className="pth2" to="/home">Home</Link>
                    <Link className="pth2" to="/ProductList">Shop</Link>
                    <Link className="pth2" to="/Blog">Blog</Link>
                    <Link className="pth2" to="/Evaluate">Order Lookup</Link>
                    <Link className="pth2" to="/Video">Video</Link>
                </div>
            </div>
        </div>
    )
} 