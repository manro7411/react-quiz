import { Link } from "react-router-dom"
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import './navigation.css'
import MenuData from "../data/MenuData";
const Navigation = () => {
    // สร้าง state ขึ้น เพื่อเช็คการเปิดปิด menu
    const [showMenu, setShowMenu] = useState(false)
    // สร้าง fuction เพื่อเปลี่ยนสถานะผ่านการคลิก icon
    // togglemenu เป็นการสร้าง function เพื่อทำการเซท boolean
    const toggleMenu = () => setShowMenu(!showMenu)
    return (
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <FaBars onClick={toggleMenu} />
                    </Link>
                </div>
            </div>

            <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-item" onClick={toggleMenu}>
                    <li className="navbar-toggle">
                        <Link to="#" ><FaWindowClose /></Link>
                    </li>
                    {MenuData.map((menu, index) => {
                        return (
                            <li className="menu-text" key={index}>
                                <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                            </li>
                        )
                    })}
                    {/* <li className="menu-text">
                        <Link to="#"><FaHome /><span>หน้าแรก</span></Link>
                    </li>
                    <li className="menu-text">
                        <Link to="#"><FaHome /><span>หน้าแรก</span></Link>
                    </li> */}
                </ul>
            </nav>
        </aside >
    )
}
export default Navigation
//ในการทำ navigation ต้องถูกครอบด้วย <Link/>
// termary operator คำสั่ง => true or false 