import { useContext } from "react"
import { AppContext } from "../../AppContext"
import es2 from "./phone.webp"
import "./Cart.css";
import { MdDeleteSweep } from "react-icons/md"
import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { RiShoppingCartFill } from "react-icons/ri"
export default function Cart() {
    const { cart, minus, sum, InDelete, AddDelete, sweetalert } = useContext(AppContext);
    return (
        <div className="cart">
          
            <div className="cart-list">
                <h2><RiShoppingCartFill/><span>Add to Cart</span></h2>
            </div>
            <div className="cart-shop">

                {cart && cart.map((item, key) => (
                    <div className="add-cart" key={key}>
                        <div className="imgles2">
                            <img src={es2} alt=""/>
                        </div>
                        <div className="cart-end">
                            <div className="name-viet">
                                <small>Americana</small>
                                <Link className="love-cart" to="/"><GiSelfLove /></Link>
                            </div>
                            <h2 className="blog-name">{item.name}</h2>
                            <select className="color-cartend">
                                <option >Black</option>
                                <option >White</option>
                                <option >Green</option>
                            </select>
                            <div className="button2">
                                <button className="btn2" onClick={() => minus(item.id)}>-</button>
                                <span className="item-qty">{item.qty}</span>
                                <button className="btn3" onClick={() => sum(item.id)}>+</button>
                            </div>
                            <h2>${770 * item.qty}<sup style={{ fontSize: "15px" }}> USD</sup></h2>
                            <div className="cart-delete">
                                <span className="delete" onClick={() => InDelete(item.id)}><MdDeleteSweep /></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bt-end">
                <button className="btn4" onClick={sweetalert}>Buy</button>
                <button className="btn4" onClick={AddDelete}>AddDelete</button>
            </div>
        </div>
    )
}