import { FaHome, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
// create object for each pages
// เป็นไฟล์ที่สร้าง topic โดยเก็บแยกเป็น objext แยก โดยใช้ .map ในการ forloop
const MenuData = [
    {
        title: "Homepage",
        path: "/",
        icon: <FaHome />

    },
    {
        title: "member",
        path: "/Member",
        icon: <FaUserAlt />
    },
    {
        title: "product",
        path: "/Product",
        icon: <FaShoppingCart />
    },
    {
        title: "contact",
        path: "/Contact",
        icon: <BsTelephone />
    },
]
export default MenuData
