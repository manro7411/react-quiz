/* eslint-disable react-hooks/rules-of-hooks */

import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../App'
// get the data or props frop app.js to process in title.js
const title = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleSwitch = (checked) => {
        setTheme(
            theme === "light" ? "dark" : "light"
            //ternary operator ลดรูป if-else
        )
    }
    return (
        <header className={theme === "dark" ? "dark" : "light"}>
            <span>Mode [{theme}]</span>
            <Switch
                onChange={toggleSwitch}
                checked={theme === "dark"}// check form mode
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={'#ffa500'}

            />
        </header>
    )
}
export default title