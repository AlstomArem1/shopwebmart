import { useContext } from "react"
import { AppContext } from "../../AppContext"
import es1 from "./phone.webp";
import "./Product.css"
import { FaStar } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import phonehlep from "./phonehlep.webp"
import { MdOutlineMenuOpen } from "react-icons/md";
import { SiWindows11 } from "react-icons/si";
import ve1 from "./ve1.jfif";
import ve2 from "./ve2.jpg";
import ve3 from "./ve3.jpg";
import Swiper1 from "../boostrap/swiper1/Swiper1";

export default function Product() {
    const { product, addCart, alert, filterList, count, setCount, am, am2, am3, am4, handle_ammenu, handle_ammenu2, handle_ammenu3, handle_ammenu4, showtop, hanld_top } = useContext(AppContext);
    return (
        <div className="product">
            <div className="box-hinh2">
                <div className="product2-3menu">
                    <div className="men3-col1">
                        <div className="col1-ul">
                            <div className="ul-li1">
                                <a href="#">Điện thoại</a>
                                <div className="menunew4-ul">
                                    <ul className="ul-w4">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Thương hiểu điện thoại</li>
                                        <li><a href="">IPhone</a></li>
                                        <li><a href="">Samsung</a></li>
                                        <li><a href="">Xiaomai</a></li>
                                        <li><a href="">OPPO</a></li>
                                        <li><a href="">vivo</a></li>
                                        <li><a href="">Nokia</a></li>
                                        <li><a href="">realme</a></li>
                                        <li><a href="">ASUS</a></li>
                                        <li><a href="">OnePlus</a></li>
                                        <li><a href="">Nukia</a></li>
                                        <li><a href="">Tecno</a></li>
                                        <li><a href="">infinix</a></li>
                                    </ul>
                                    <ul className="ul-w4">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Mức giá điện thoại</li>
                                        <li><a href="">Dưới 5 triệu</a></li>
                                        <li><a href="">Từ 5 - 10 triệu</a></li>
                                        <li><a href="">Từ 10 - 15 triệu</a></li>
                                        <li><a href="">Trên 15 triệu</a></li>
                                    </ul>
                                    <ul className="ul-w4">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Điện thoại Hot</li>
                                        <li><a href="">IPhone 14 Vàng mới</a></li>
                                        <li><a href="">Galaxy Z Fold4</a></li>
                                        <li><a href="">Tecno Camon 20</a></li>
                                        <li><a href="">Galaxy S23 Ultra</a></li>
                                        <li><a href="">Galaxy A34</a></li>
                                        <li><a href="">Infinix Hot 30i</a></li>
                                    </ul>
                                    <ul className="ul-w4">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Thương hiệu Tabiet</li>
                                        <li><a href="">IPad</a></li>
                                        <li><a href="">Samsung</a></li>
                                        <li><a href="">Xiao mi</a></li>
                                        <li><a href="">Huawei</a></li>
                                        <li><a href="">lenovo</a></li>
                                        <li><a href="">Nokia</a></li>
                                        <li><a href="">Alcatel</a></li>
                                        <li><a href="">Kindle</a></li>
                                        <li><a href="">Máy đọc sách</a></li>
                                    </ul>
                                    <ul className="ul-w4">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Tabiet hot</li>
                                        <li><a href="">IPad Gen 10</a></li>
                                        <li><a href="">IPad Pro 12.9 inch 2022</a></li>
                                        <li><a href="">Galaxy Tab S8 5G</a></li>
                                        <li><a href="">OPPO Pad Air</a></li>
                                        <li><a href="">Huawei Matepad 2022</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Laptop</a>
                                <div className="menunew4-ul2">
                                    <ul className="ul-w42">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo hàng</li>
                                        <li><a href="">Mac</a></li>
                                        <li><a href="">HP</a></li>
                                        <li><a href="">Dell</a></li>
                                        <li><a href="">ASUS</a></li>
                                        <li><a href="">Lenove</a></li>
                                        <li><a href="">Microsoft Surface</a></li>
                                        <li><a href="">Acer</a></li>
                                        <li><a href="">Xiaomi</a></li>
                                        <li><a href="">LG</a></li>
                                        <li><a href="">Huawei</a></li>

                                    </ul>
                                    <ul className="ul-w42">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo nhu cầu</li>
                                        <li><a href="">Văn phòng</a></li>
                                        <li><a href="">Gaming</a></li>
                                        <li><a href="">Mông nhẹ</a></li>
                                        <li><a href="">Đồ hoạ - kỹ thuật</a></li>
                                        <li><a href="">Sinh viên</a></li>
                                        <li><a href="">Cảm ứng</a></li>

                                    </ul>
                                    <ul className="ul-w42">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo dòng chip</li>
                                        <li><a href="">Laptop Core i5</a></li>
                                        <li><a href="">Laptop Core i3</a></li>
                                        <li><a href="">Laptop Core i7</a></li>
                                        <li><a href="">Laptop Core i9</a></li>

                                    </ul>
                                    <ul className="ul-w42">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo kích thước màn hình</li>
                                        <li><a href="">Laptop 12 inch</a></li>
                                        <li><a href="">Laptop 13 inch</a></li>
                                        <li><a href="">Laptop 14 inch</a></li>
                                        <li><a href="">Laptop 15.6 inch</a></li>
                                        <li><a href="">Laptop 16 inch</a></li>

                                    </ul>
                                    <ul className="ul-w42">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Sản phẩm hot</li>
                                        <li><a href="">Macbook Pro M2 2022 512GB</a></li>
                                        <li><a href="">Macbook Pro M2 2022 256GB</a></li>
                                        <li><a href="">Macbook Air M2 2022 512GB</a></li>
                                        <li><a href="">Mac Mini M2 2022 512GB</a></li>
                                        <li><a href="">Macbook Air M2 2022 256GB</a></li>
                                        <li><a href="">Asus Vivobook Stale Oled T3304</a></li>
                                        <li><a href="">Lenovo ldeapad 3 15IML 05</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Âm thanh</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn loại tai nghe</li>
                                        <li><a href="">Tai nghe Bluetooth</a></li>
                                        <li><a href="">Tai nghe chụp tai</a></li>
                                        <li><a href="">Tai nghe có dây</a></li>
                                        <li><a href="">Tay nghe thể thao</a></li>
                                        <li><a href="">Tai nghe Gaming</a></li>
                                        <li><a href="">Xem tất cả tai nghe</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Hàng tai nghe</li>
                                        <li><a href="">Apple</a></li>
                                        <li><a href="">JBL</a></li>
                                        <li><a href="">Xiao mai</a></li>
                                        <li><a href="">Samsung</a></li>
                                        <li><a href="">Sony</a></li>
                                        <li><a href="">Sennheiser</a></li>
                                        <li><a href="">Soundpeats</a></li>
                                        <li><a href="">Soul</a></li>
                                        <li><a href="">Havit</a></li>
                                        <li><a href="">Editfier</a></li>

                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Hàng loa</li>
                                        <li><a href="">JBL</a></li>
                                        <li><a href="">LG</a></li>
                                        <li><a href="">Sony</a></li>
                                        <li><a href="">Marshall</a></li>
                                        <li><a href="">Harman Kardon</a></li>
                                        <li><a href="">Samsung</a></li>
                                        <li><a href="">Ediffier</a></li>
                                        <li><a href="">Bose</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Thiết bị thu âm</li>
                                        <li><a href="">Mic thu âm</a></li>

                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Sản phẩm nổi bật</li>
                                        <li><a href="">AirPods Pro 2</a></li>
                                        <li><a href="">Galaxy Buds 2 Pro</a></li>
                                        <li><a href="">AirPods Pro</a></li>
                                        <li><a href="">Samsung MX-T40</a></li>
                                        <li><a href="">Samsung HW-Q600B</a></li>
                                        <li><a href="">JBL Quantum one </a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Đồng hồ, Máy ảnh</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Loại đồng hồ</li>
                                        <li><a href="">Đồng hồ thông minh</a></li>
                                        <li><a href="">Vòng đeo tay thông minh</a></li>
                                        <li><a href="">Đồng hồ định vị trí</a></li>
                                        <li><a href="">Dây theo</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo thương hiệu</li>
                                        <li><a href="">Apple Wacth</a></li>
                                        <li><a href="">Samsung</a></li>
                                        <li><a href="">Xiaomi</a></li>
                                        <li><a href="">Huawei</a></li>
                                        <li><a href="">Coros</a></li>
                                        <li><a href="">Garmin</a></li>
                                        <li><a href="">Kieslect</a></li>
                                        <li><a href="">Amazfit</a></li>
                                        <li><a href="">Soundpeats</a></li>
                                        <li><a href="">Oppo</a></li>

                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo nhu cầu</li>
                                        <li><a href="">Đồng hồ thể thao</a></li>
                                        <li><a href="">Đồng hồ chồng nước</a></li>
                                        <li><a href="">Đồng hồ nghe gọi</a></li>
                                        <li><a href="">Đồng hồ đo huyết áp</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Máy ảnh</li>
                                        <li><a href="">Sony</a></li>
                                        <li><a href="">Fujifilm</a></li>
                                        <li><a href="">Camon</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Sản phẩm nổi bật</li>
                                        <li><a href="">Apple Watch Ultra</a></li>
                                        <li><a href="">Apple Watch 2022</a></li>
                                        <li><a href="">Apple Watch Series 8</a></li>
                                        <li><a href="">Garmin Forerunner</a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Gia dụng, Smarthome</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Gia dụng thông minh</li>
                                        <li><a href="">Robot hút bụi</a></li>
                                        <li><a href="">Máy hút bụi cầm tay</a></li>
                                        <li><a href="">Quạt thông minh</a></li>
                                        <li><a href="">Đèn thông minh</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chăm sóc sức khoẻ</li>
                                        <li><a href="">Máy lọc không khí</a></li>
                                        <li><a href="">Thiết bị làm đẹp</a></li>
                                        <li><a href="">Cân sức khoẻ</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Giải trí tại gia</li>
                                        <li><a href="">TV Box</a></li>
                                        <li><a href="">Máy chiếu</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Đồ gia dụng</li>
                                        <li><a href="">Nồi cơm điện</a></li>
                                        <li><a href="">Nồi chiên không dầu</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Bàn ghế thông minh</li>
                                        <li><a href="">Bàn ghế gaming</a></li>
                                        <li><a href="">Bàn ghế công thái học</a></li>
                                        <li><a href="">Bàn ghế học sinh</a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Phụ kiện</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Phụ kiện di động</li>
                                        <li><a href="">Phụ kiện Apple</a></li>
                                        <li><a href="">Dàn màn hình</a></li>
                                        <li><a href="">Ốp lưng - Bao da</a></li>
                                        <li><a href="">Thẻ nhớ</a></li>
                                        <li><a href="">Apple Care+</a></li>
                                        <li><a href="">Sim 4G </a></li>
                                        <li><a href="">Sim số đẹp</a></li>

                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Phụ kiện Laptop</li>
                                        <li><a href="">Chuột, bàn phim</a></li>
                                        <li><a href="">Balo Laptop | Túi chống sốc</a></li>
                                        <li><a href="">Phần mềm</a></li>
                                        <li><a href="">Webcam</a></li>
                                        <li><a href="">Giá đỡ</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Thiết bị mạng</li>
                                        <li><a href="">Thiết bị phát sóng WiFi</a></li>
                                        <li><a href="">Bộ phát wifi di động</a></li>
                                        <li><a href="">Bộ kích sóng WiFi</a></li>
                                        <li><a href="">Xem tất cả thiết bị mạng</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Phụ kiện Iphone14</li>
                                        <li><a href="">Cáp sạc IPhone 14</a></li>
                                        <li><a href="">Ốp lưng IPhone 14</a></li>
                                        <li><a href="">Dán màn hình Iphone 14</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Phụ kiện Galaxy S23</li>
                                        <li><a href="">Ốp lưng S23 Series</a></li>
                                        <li><a href="">Dàn màn hình S23 Series</a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">PC, Màn hình</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Máy tính đề bàn</li>
                                        <li><a href="">PC ráp sẵn CPS</a></li>
                                        <li><a href="">Máy tính All in One</a></li>
                                        <li><a href="">PC đồng hồ</a></li>
                                        <li><a href="">Build PC</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn màn hình theo nhu cầu </li>
                                        <li><a href="">Màn hình Gaming</a></li>
                                        <li><a href="">Màn hình văn phòng</a></li>
                                        <li><a href="">Màn hình đồ hoạ</a></li>
                                        <li><a href="">Xem tất cả màn hình</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Linh kiện máy tính</li>
                                        <li><a href="">CPU</a></li>
                                        <li><a href="">Mainboard</a></li>
                                        <li><a href="">RAM</a></li>
                                        <li><a href="">Ổ cứng</a></li>
                                        <li><a href="">Nguồn máy tính</a></li>
                                        <li><a href="">Card màn hình </a></li>
                                        <li><a href="">Tản nhiệt</a></li>
                                        <li><a href="">Case máy tính</a></li>
                                        <li><a href="">Xen tất cả linh kiện máy tính</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Thiết bị văn phòng</li>
                                        <li><a href="">Máy in</a></li>
                                        <li><a href="">Phần mềm</a></li>
                                        <li><a href="">bàn ghế công thái học</a></li>


                                    </ul>

                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Tivi</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo hàng</li>
                                        <li><a href="">Samsung</a></li>
                                        <li><a href="">LG</a></li>
                                        <li><a href="">Xiaomi</a></li>
                                        <li><a href="">Coocaa</a></li>
                                        <li><a href="">Casper</a></li>
                                        <li><a href="">Sony </a></li>
                                        <li><a href="">Toshiba</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo mức giá</li>
                                        <li><a href="">Từ 9 - 12 triệu</a></li>
                                        <li><a href="">Từ 12 - 15 triệu</a></li>
                                        <li><a href="">Trên 15 triệu</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo độ phân giải</li>
                                        <li><a href="">Tivi 4K</a></li>
                                        <li><a href="">Tivi 8K</a></li>
                                        <li><a href="">Tivi Full HD</a></li>
                                        <li><a href="">Tivi QLED</a></li>
                                        <li><a href="">Android Tivi</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo kích thước </li>
                                        <li><a href="">Tivi 32 inch</a></li>
                                        <li><a href="">Tivi 43 inch</a></li>
                                        <li><a href="">Tivi 50 inch</a></li>
                                        <li><a href="">Tivi 55 inch</a></li>
                                        <li><a href="">Tivi 65 inch</a></li>
                                        <li><a href="">Tivi 70 inch </a></li>
                                        <li><a href="">Tivi 85 inch</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo hàng</li>
                                        <li><a href="">Mac</a></li>
                                        <li><a href="">HP</a></li>
                                        <li><a href="">Dell</a></li>
                                        <li><a href="">ASUS</a></li>
                                        <li><a href="">Lenove</a></li>
                                        <li><a href="">Microsoft Surface</a></li>
                                        <li><a href="">Acer</a></li>
                                        <li><a href="">Xiaomi</a></li>
                                        <li><a href="">LG</a></li>
                                        <li><a href="">Huawei</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Thu cũ đổi mới</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn theo hàng</li>
                                        <li><a href="">Thu cũ IPhone</a></li>
                                        <li><a href="">Thu cũ Samsung</a></li>
                                        <li><a href="">Thu cũ Mac</a></li>
                                        <li><a href="">Thu cũ Xiaomai</a></li>
                                        <li><a href="">Thu cũ Laptop</a></li>
                                        <li><a href="">Thu cũ iPad</a></li>
                                        <li><a href="">Thu cũ Apple Watch</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Sản phẩn trợ giá cao</li>
                                        <li><a href="">IPhone 13 Pro Max 128GB</a></li>
                                        <li><a href="">IPhone 13 Pro Max 256GB</a></li>
                                        <li><a href="">IPhone 14 Pro Max 128GB</a></li>
                                        <li><a href="">IPhone 14 Pro Max 256GB</a></li>
                                        <li><a href="">Samsung Galaxy Z Fold3 5G</a></li>
                                        <li><a href="">Macbook Pro 13 M2 2022 8GB 256GB</a></li>


                                    </ul>



                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Hàng cũ</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn loại sản phẩm cũ</li>
                                        <li><a href="">Điện thoại cũ</a></li>
                                        <li><a href="">Máy tính bảng cũ</a></li>
                                        <li><a href="">Mac cũ</a></li>
                                        <li><a href="">Laptop cũ</a></li>
                                        <li><a href="">Tai nghe cũ</a></li>
                                        <li><a href="">Loa cũ</a></li>
                                        <li><a href="">Đồng hồ</a></li>
                                        <li><a href="">Màn hình cũ</a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn dòng IPhone cũ</li>
                                        <li><a href="">IPhone 14 series cũ</a></li>
                                        <li><a href="">IPhone 13 series cũ</a></li>
                                        <li><a href="">IPhone 12 series cũ</a></li>
                                        <li><a href="">IPhone 11 series cũ</a></li>
                                        <li><a href="">IPhone 10 series cũ</a></li>
                                        <li><a href="">Xem tất cả IPhone cũ </a></li>


                                    </ul>
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chọn hàng laptop cũ</li>
                                        <li><a href="">laptop Dell cũ</a></li>
                                        <li><a href="">Laptop ASUS cũ</a></li>
                                        <li><a href="">Laptop Acer cũ</a></li>
                                        <li><a href="">Laptop HP cũ</a></li>
                                        <li><a href="">Laptop HP cũ</a></li>
                                        <li><a href="">laptop Surface cũ</a></li>

                                    </ul>


                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Khuyến mãi</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Khuyến mãi</li>
                                        <li><a href="">Hotsale cuối tuần</a></li>
                                        <li><a href="">Ưu đãi thanh toán</a></li>
                                        <li><a href="">Khách hàng doanh nghiệp B2B</a></li>


                                    </ul>



                                </div>
                            </div>
                            <div className="ul-li1">
                                <a href="#">Tin công nghệ</a>
                                <div className="menunew4-ul3">
                                    <ul className="ul-w43">
                                        <li style={{ fontSize: "15px", fontWeight: "600" }}>Chuyên mục</li>
                                        <li><a href="">Tin công nghệ</a></li>
                                        <li><a href="">Khám phá</a></li>
                                        <li><a href="">S-Garmes</a></li>
                                        <li><a href="">Tư vấn</a></li>
                                        <li><a href="">Trên tay</a></li>
                                        <li><a href="">Thị trường</a></li>
                                        <li><a href="">Thủ thuật</a></li>


                                    </ul>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="men3-col2">
                        <div className="col2-imges">
                            <Swiper1 />
                        </div>
                    </div>
                    <div className="men3-col3">
                        <div className="col3-imges">
                            <img src={ve1} />

                        </div>
                        <div className="col3-imges">
                            <img src={ve2} />

                        </div><div className="col3-imges">
                            <img src={ve3} />

                        </div>
                    </div>
                </div>
            </div>
            <div className="box-hinh">
                <div className="products-top">
                    <div className="products-start">
                        <div className="sort">
                            <p>Sort By : </p>
                            <select className="menu-byproduct">
                                <option>Link1</option>
                                <option>Link2</option>
                                <option>Link3</option>
                                <option>Link4</option>
                            </select>
                        </div>
                        <div className="show-product">
                            <p>Show : </p>
                            <select className="show-number">
                                <option >number1</option>
                                <option>number2</option>
                                <option>number3</option>
                            </select>
                        </div>
                    </div>
                    <div className="products-end">
                        <button className={showtop === 1 ? "nab1 active20" : "nab1"} onClick={() => hanld_top(1)}><SiWindows11 /></button>
                        <button className={showtop === 2 ? "nab1 active20" : "nab1"} onClick={() => hanld_top(2)}><MdOutlineMenuOpen /></button>
                    </div>
                </div>
                <div className="shop-product">
                    <div className={showtop === 1 ? "produc-right show active20" : "produc-right show"}>
                        {product && filterList(product).map((item, key) => (
                            <div className="item-name" key={key}>
                                <div className="imgles">
                                    <img src={es1} />
                                </div>
                                <p className="poss">Fossil</p>
                                <h4 className="blog1">Product:{item.name}</h4>
                                <p className="money">$770</p>
                                <div className="button1">
                                    <button className="btn1" onClick={alert}>Buy Now</button>
                                    <button className="btn1" onClick={() => addCart(item.id)}>add to cart</button>
                                </div>
                                <div className="icon-star">
                                    <i style={{ color: "gold" }}><FaStar /></i>
                                    <i style={{ color: "gold" }}><FaStar /></i>
                                    <i style={{ color: "gold" }}><FaStar /></i>
                                    <i style={{ color: "gold" }}><FaStar /></i>
                                    <i style={{ color: "gold" }}><FaStar /></i>
                                    <i>(1 review)</i>
                                </div>
                                <small>{item.city}</small>
                            </div>
                        ))}
                    </div>
                    <div className={showtop === 2 ? "produc-right show active20" : "produc-right show"}>
                        {product && filterList(product).map((item, key) => (
                            <div className="item-name2" key={key}>
                                <div className="run1">
                                    <div className="imgles2">
                                        <img src={es1} />
                                    </div>
                                </div>
                                <div className="run2">
                                    <h4>{item.name}</h4>
                                    <small style={{marginBottom:"5px", paddingLeft:"10px", color:"#e67e22"}}>{item.city}</small>
                                    <p>*Màn hình 6.67 inch và tấm nền AMOLED mang đến không gian hiển thị hình ảnh đẹp mắt</p>
                                    <p>*Vi xử lý Snapdragon# 732G kết hợp chip đồ hoạ Adreno 618 giúp chiến game mượt mà</p>
                                    <p>*Thoả niềm đam mê nhiếp ảnh cùng hệ thống 3 camera với ống kính chính lên đến 50 MP</p>
                                    <p>*Viên pin dung lượng 5000 mAh cho khả năng hoạt động cả ngày dài ở các tác vụ cơ bản</p>
                                    <div className="run2-flex">
                                        <div className="icon-star2">
                                            <i style={{ color: "gold" }}><FaStar /></i>
                                            <i style={{ color: "gold" }}><FaStar /></i>
                                            <i style={{ color: "gold" }}><FaStar /></i>
                                            <i style={{ color: "gold" }}><FaStar /></i>
                                            <i style={{ color: "gold" }}><FaStar /></i>
                                            <i>(1 review)</i>
                                        </div>
                                        <div className="button1-flex">
                                            
                                            <button className="btn1" onClick={() => addCart(item.id)}>add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="produc-left">
                        <div className="left-start">
                            <div className="left-starte1">
                                <h1>Filters</h1>
                            </div>
                            <div className="left-starte2">
                                <div className="ava">
                                    <div className="ave-h2">
                                        <h3>Availability</h3>
                                        <h4 onClick={handle_ammenu2}>
                                            <span className={`${am2 ? 'fas fa-minus' : 'fas fa-plus'}`}></span>
                                        </h4>
                                    </div>
                                    <div className={`nav-the2 ${am2 ? 'active14' : ''}`}>
                                        <div className="resd">
                                            <p>0 selected</p>
                                            <p>Reser</p>
                                        </div>
                                        <div className="input-chedbox1">
                                            <input type="checkbox" />In stock
                                            <br />
                                            <p>(9)</p>
                                        </div>
                                        <div className="input-chedbox2">
                                            <input type="checkbox" />Out of stock
                                            <br />
                                            <p>(10)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="left-starte3">
                                <div className="ave2-h2">
                                    <h3>Price</h3>
                                    <h4 onClick={handle_ammenu}>
                                        <span className={`${am ? 'fas fa-minus' : 'fas fa-plus'}`}></span>
                                    </h4>
                                </div>
                                <div className={`nav-the ${am ? "active13" : ""}`}>
                                    <div className="resd2">
                                        <p>The highest price is 247.00 USD</p>
                                        <p>Reset</p>
                                    </div>
                                    <div className="max-min">
                                        <div className="min">
                                            <p>Min price: </p>
                                            <input type="number" placeholder="cheap" />
                                        </div>
                                        <div className="max">
                                            <p>Max price: </p>
                                            <input type="number" placeholder="expensive" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="left-starte4">
                                <div className="ave3-h2">
                                    <h3>Product Type</h3>
                                    <h4 onClick={handle_ammenu3}>
                                        <span className={`${am3 ? 'fas fa-minus' : 'fas fa-plus'}`}></span>
                                    </h4>
                                </div>
                                <div className={`nav-the3 ${am3 ? 'active15' : ''}`}>
                                    <div className="resd3">
                                        <p>0 selected</p>
                                        <p>Reset</p>
                                    </div>
                                    <div className="selected-product">
                                        <span onClick={() => setCount(5)}><a href="#">Link1</a></span>
                                        <span onClick={() => setCount(6)}><a href="#">Link2</a></span>
                                        <span onClick={() => setCount(7)}><a href="#">Link3</a></span>
                                        <span onClick={() => setCount(8)}><a href="#">Link4</a></span>
                                        <span onClick={() => setCount(9)}><a href="#">Link5</a></span>
                                        <span onClick={() => setCount(10)}><a href="#">Link6</a></span>
                                        <span onClick={() => setCount(11)}><a href="#">Link7</a></span>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="left-starte5">
                                <div className="ave4-h2">
                                    <h3>Nơi Sinh</h3>
                                    <h4 onClick={handle_ammenu4}>
                                        <span className={`${am4 ? 'fas fa-minus' : 'fas fa-plus'}`}></span>
                                    </h4>
                                </div>
                                <div className={`resd4 ${am4 ? 'active16' : ''}`}>
                                    <span><input type="radio" name="ra" onClick={() => setCount(3)} /> Ho Chi Minh City</span>
                                    <span><input type="radio" name="ra" onClick={() => setCount(4)} /> HaNoi</span>
                                    <span><input type="radio" name="ra" onClick={() => setCount(0)} /> All</span>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
