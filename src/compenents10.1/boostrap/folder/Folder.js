
import { useContext } from "react";
import "./Folder.css";
import { AppContext } from "../../../AppContext";
export default function Folder() {
    const { activeIndex, setActiveIndex, items } = useContext(AppContext);

    return (
        <div className="folder">
            <div
                className="folder-img-meeting"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
                {items.map((item, key) => (
                    <img key={key} src={item.name} />
                ))}
            </div>
        </div>
    )
}