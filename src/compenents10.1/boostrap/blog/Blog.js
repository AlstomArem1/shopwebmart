
import { useContext } from "react";
import "./Blog.css";
import { AppContext } from "../../../AppContext";
export default function Blog() {
    const { activeIndex, setActiveIndex, items } = useContext(AppContext);

    return (
        <div className="blog">
            <div
                className="blog-img-meeting"
                
            >
                {items.map((item, key) => (
                    <div 
                    className="blog-imges"
                    style={{transform: `translate(-${activeIndex * 100}%)` }}
                    key={key}
                    >
                        <h1 style={{fontSize:"60px",fontWeight:"900"}} >{item.blog}</h1>
                        <p>{item.that}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}