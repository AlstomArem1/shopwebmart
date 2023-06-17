import { createContext, useEffect, useState } from "react";
import axios from "axios"
import swal from 'sweetalert';
import moment from "moment";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false); 
    const [am, setAm] = useState(false);
    const [am2, setAm2] = useState(false);
    const [am3, setAm3] = useState(false);
    const [am4, setAm4] = useState(false);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState(null);
    const [navbar, setNavbar] = useState(false);
    const [ showtop, setShowtop] = useState(1);
    const hanld_top = (e) => {
        setShowtop(e);
    }
    const getData = async () => {
        const url = `https://64733b7bd784bccb4a3c5e84.mockapi.io/clip-shop`;
        axios
            .get(url)
            .then((res) => setProduct(res.data))
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        getData();
    }, []);
    const addCart = (id) => {
        const kq = product.find((item) => item.id == id);
        const index = cart.findIndex((item) => item.id == id);
        if (index >= 0) {
            const newList = cart;
            // newList[index]["qty"]++;
            setCart(newList);
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }]);
        }
        swal({
            title: "Complete!",
            text: "Add to cart!",
            icon: "success",
            button: "Yes",
        });
    }
    const minus = (id) => {
        const kq = cart && cart.map((item) => (
            item.id === id ? { ...item, qty: item.qty - (item.qty > 1 ? 1 : 0) } : item
        ));
        setCart(kq)
    }
    const sum = (id) => {
        const kq = cart && cart.map((item) => (
            item.id === id ? { ...item, qty: item.qty + (item.qty < 5 ? 1 : 0) } : item
        ));
        setCart(kq)
    }
    const InDelete = (id) => {
        const kq = cart && cart.filter((sty) => sty.id !== id);
        setCart(kq);
    }
    const AddDelete = () => {
        const kq = cart && cart.filter((item) => !item.id);
        setCart(kq);
    }
    const sweetalert = (id) => {
        const kq = cart && cart.filter((item) => item.id);
        if (kq != 0) {
            swal({
                title: "Complete Payment!",
                text: "You clicked the button!",
                icon: "success",
                button: "Next",
            });
        }
        else if (kq == 0) {
            swal({
                title: "No cart yet!",
                text: "Please buy cart!",
                icon: "warning",
                button: "Next",
            });
        }

    }
    const alert = () => {
        swal({
            title: "Complete Payment!",
            text: "You clicked the button!",
            icon: "success",
            button: "Next",
        });
    }
    const Guitinnhan = () => {
        swal({
            title: "Complete!",
            text: "Đợi chờ để giao dịch địa chỉ của bạn!",
            icon: "success",
            button: "Next",
        });
    }
    const Background = () => {
        if (window.scrollY >= 150) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', Background);

    const hour = moment().format('hh');
    const minet = moment().format('mm');
    const sec = moment().format('ss');
    const today = moment().format('MMMM, DD/MM/YYYY');
    const [time, setTime] = useState();
    const Times = () => {
        const sec = moment().format('ss');
        setTime(sec)
    }
    const handle_iconmenu2 = () => {
        setShow(!show);
    }
    const handle_iconmenu3 = () => {
        setCheck(!check);
    }
    setInterval(Times, 1000)

    const [activeIndex, setActiveIndex] = useState([]);
    const [play, setPlay] = useState([]);
    const items = [
        {
            id: 1,
            name: require("./compenents10.1/boostrap/folder/meeting1.jpeg"),
            blog: "Create a PC",
            that: "that's all your own"
        },
        {
            id: 2,
            name: require("./compenents10.1/boostrap/folder/meeting2.jpeg"),
            blog: "Has some changes",
            that: "about a computer meeting "

        },
        {
            id: 3,
            name: require("./compenents10.1/boostrap/folder/meeting4.jpeg"),
            blog: "Your dream",
            that: " too super awesome"
        }
    ]
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1
        }
        setActiveIndex(newIndex);
    }

    const updateSp = (newLt) => {
        if (newLt < 0) {
            newLt = 0;
        } else if (newLt >= product.length) {
            newLt = product.length - 1
        }
        setPlay(newLt);
    }
    const filterList = (list) => {
        if (count == 1) {
            return [list[0], list[1], list[2], list[3]];
        } else if (count == 2) {
            return [list[4], list[5], list[7]];
        } else if (count == 3) {
            return [list[0], list[2], list[4], list[6], list[8], list[10],list[12],list[14],list[16],list[18]]
        }
        else if (count == 4) {
            return [list[1], list[3], list[5], list[7], list[9],list[11],list[13],list[15],list[17],list[19]]
        }
        else if (count == 5) {
            return [list[0]]
        }
        else if (count == 6) {
            return [list[1]]
        }
        else if (count == 7) {
            return [list[2]]
        }
        else if (count == 8) {
            return [list[3]]
        }
        else if (count == 9) {
            return [list[4]]
        }
        else if (count == 10) {
            return [list[5]]
        }
        else if (count == 11) {
            return [list[6]]
        }
        
        else {
            return list
        }

    };
    const handle_ammenu = () => {
        setAm(!am);
    }
    const handle_ammenu2 = () => {
        setAm2(!am2)
    }
    const handle_ammenu3 = () => {
        setAm3(!am3)
    }
    const handle_ammenu4 = () => {
        setAm4(!am4)
    }
   
    return (
        <AppContext.Provider
            value={{
                show,
                count,
                setCount,
                setShow,
                product,
                cart,
                addCart,
                minus,
                sum,
                InDelete,
                AddDelete,
                sweetalert,
                alert,
                navbar,
                hour,
                minet,
                sec,
                today,
                time,
                items,
                handle_iconmenu2,
                updateIndex,
                setActiveIndex,
                activeIndex,
                updateSp,
                play,
                setPlay,
                check,
                setCheck,
                handle_iconmenu3,
                filterList,
                am,
                am2,
                am3,
                am4,
                handle_ammenu,
                handle_ammenu2,
                handle_ammenu3,
                handle_ammenu4,
                hanld_top,
                showtop,
                Guitinnhan,
            }}>
            {children}
        </AppContext.Provider>
    )
}