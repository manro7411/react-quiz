/* eslint-disable react-hooks/rules-of-hooks */

import { useContext } from 'react'
import { ThemeContext } from '../App'
import light from '../image/light.svg'
 import dark from '../image/dark.svg'
const content = () => {
    const { theme } = useContext(ThemeContext)// ดึง ตัวแปร theme มาใช้
    return (
        <main className={theme === "dark" ? "dark" : "light"}>
            <div>
                <h1>Ratchanon Traitiprat</h1>
                <p>Darkmode Workshop</p>
            </div>
            <img src={theme==="dark"? dark:light} alt='Logo' />
        </main>
    )
}
export default content