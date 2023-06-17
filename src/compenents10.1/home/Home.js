import { useContext } from "react";
import Folder from "../boostrap/folder/Folder";
import "./Home.css"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import { AppContext } from "../../AppContext";

import { GiSelfLove } from "react-icons/gi"
import flip from "./phoneflip1.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import Slider from "../boostrap/slider1/Slider";
import Blog from "../boostrap/blog/Blog";
import SimpleSlider from "../boostrap/slider1/Slider";
import house1 from "./house1.jpg";
import house2 from "./house2.jpg";
import house3 from "./house3.jpg";
import map from "./map.PNG";
export default function Home() {
    const { updateSp, play, updateIndex, activeIndex, hour, minet, today, product } = useContext(AppContext);
    return (
        <div className="home">
            <div className="home-web1">
                <div className="web1-left">
                    <div className="web1-rocter">
                        <div className="web1-number">
                            <span>{hour}</span>
                            :
                            <span>{minet} AM</span>
                        </div>
                        <div className="web1-line"></div>
                        <div className="web1-mod">
                            <h5>
                                {today}
                            </h5>
                        </div>
                    </div>
                    <div className="web1-blog">
                        <div className="web1-kit">
                          
                            <Blog />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem magni, non quod ullam ratione aliquid saepe iure quibusdam doloribus explicabo unde, officia natus, amet eum! Explicabo repellat aliquid eius!
                            </p>
                            <div>
                                <Link to="/Blog"><button className="web1-btn1 ">Show Reading</button></Link>
                                <Link to="/ProductList"><button className="web1-btn2">Find Products</button></Link>
                            </div>
                        </div>
                        <div className="web1-changes">
                            <button className="web1-chang1"
                                onClick={() => {
                                    updateIndex(activeIndex - 1);
                                }}
                            ><HiChevronDoubleLeft /></button>
                            <button className="web1-chang1"
                                onClick={() => {
                                    updateIndex(activeIndex + 1);
                                }}
                            ><HiChevronDoubleRight /></button>
                        </div>
                    </div>
                </div>
                <div className="web1-right">
                    <div className="web1-imgels">
                        <Folder />
                    </div>
                </div>
            </div>
            <div className="home-web2">
                <div className="web2-start">
                    <h1>Bestseller</h1>
                    <Link to="/ProductList"><button className="web2-btnt1">Show Products</button></Link>
                </div>
                <div className="web2-end">
                    <div className="web2-cart">
                        <div className="clip-imgesl">
                            <img src={flip} alt="" />
                        </div>
                        <div className="clip-cartes">
                            <div className="clip-ph1">
                                <p className="clip-p1">Americana</p>
                                <Link to="/"><span><GiSelfLove /></span></Link>
                            </div>
                            <h5 style={{ marginBottom: "25px" }}>Iphone 13</h5>
                            <select className="clip-p2">
                                <option >Black</option>
                                <option >White</option>
                                <option >Green</option>
                            </select>
                            <h5>800.00<sup style={{ fontSize: "10px" }}> USD</sup></h5>
                            <Link to="/Evaluate"><button className="web2-btnt2">Mua Ngay</button></Link>
                        </div>
                    </div>
                    <div className="web2-cart">
                        <div className="clip-imgesl">
                            <img src={flip} alt="" />
                        </div>
                        <div className="clip-cartes">
                            <div className="clip-ph1">
                                <p className="clip-p1">Americana</p>
                                <Link to="/"><span><GiSelfLove /></span></Link>
                            </div>
                            <h5 style={{ marginBottom: "25px" }}>Iphone 13</h5>
                            <select className="clip-p2">
                                <option >Black</option>
                                <option >White</option>
                                <option >Green</option>
                            </select>

                            <h5>800.00<sup style={{ fontSize: "10px" }}> USD</sup></h5>
                            <Link to="/Evaluate"><button className="web2-btnt2">Mua Ngay</button></Link>
                        </div>
                    </div>
                    <div className="web2-cart">
                        <div className="clip-imgesl">
                            <img src={flip} alt="" />
                        </div>
                        <div className="clip-cartes">
                            <div className="clip-ph1">
                                <p className="clip-p1">Americana</p>
                                <Link to="/"><span><GiSelfLove /></span></Link>
                            </div>
                            <h5 style={{ marginBottom: "25px" }}>Iphone 13</h5>
                            <select className="clip-p2">
                                <option >Black</option>
                                <option >White</option>
                                <option >Green</option>
                            </select>
                            <h5>800.00<sup style={{ fontSize: "10px" }}> USD</sup></h5>
                            <Link to="/Evaluate"><button className="web2-btnt2">Mua Ngay</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-web3">
                <div className="web3-slider">
                    <Slider />
                </div>
            </div>
            <div className="home-web5">
                <h5>List of products (Old or New)</h5>
                <div className="web5-product">
                    {product && product.map((item1, key) => (
                        <div className="products-01"
                            key={key}
                        >
                            <div className="web5-ct"
                                style={{ transform: `translate(-${play * 100}%)` }}
                            >
                                <div className="imgle-web5"
                                >
                                    <img src={flip} />
                                </div>
                                <p>{item1.name}</p>
                               <Link to="/ProductList"><button>Old Product</button></Link>
                            </div>
                            <div className="web5-ct"
                                style={{ transform: `translate(-${play * 100}%)` }}
                            >
                                <div className="imgle-web5">
                                    <img src={flip} />
                                </div>
                                <p>{item1.name}</p>
                                <Link to="/ProductList"><button>New Product</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="web5-On">
                    <button
                        className="onclick-btn"
                        onClick={() => {
                            updateSp(play - 1);
                        }}
                    ><HiChevronDoubleLeft /></button>
                    <button
                        className="onclick-btn"
                        onClick={() => {
                            updateSp(play + 1);
                        }}
                    ><HiChevronDoubleRight /></button>
                </div>
            </div>
            <div className="home-web4">
                <div className="web4-new">
                    <div className="web4-Top">
                        <h1>News & Update</h1>
                    </div>
                    <div className="web4-Bottom" >
                        <div className="web4-Bod" style={{ borderLeft: "1px solid #000", borderBottom: "1px solid #000" }}>
                            <div className="Bod-img">
                                <img src={house1} alt="" />
                            </div>
                            <div className="Bod-blg">
                                <h1>Address:...</h1>
                                <p>Watues cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua...</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                        <div className="web4-Bod">
                            <div className="Bod-img">
                                <img src={house2} alt="" />
                            </div>
                            <div className="Bod-blg">
                                <h1>Address:...</h1>
                                <p>Watues cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua...</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                        <div className="web4-Bod" style={{ borderRight: "1px solid #000", borderTop: "1px solid #000" }}>
                            <div className="Bod-img">
                                <img src={house3} alt="" />
                            </div>
                            <div className="Bod-blg">
                                <h1>Address:...</h1>
                                <p>Watues cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua...</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-web6">
                <div className="web6-map">
                    <img src={map} />
                </div>
                <div className="web6-bottom">
                    <div className="email-web6">
                        <input className="web6-text" type="text" placeholder="Email: " />
                        <input className="web6-number" type="number" placeholder="SDT: " />
                    </div>
                    <div className="form-username">
                        <input type="text" className="web6-username" placeholder="Username: " />
                        <input type="blog" className="web6-review" placeholder="review and evaluation: " />
                    </div>
                </div>
            </div>

        </div>
    )
}