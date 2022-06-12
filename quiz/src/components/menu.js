import { useContext } from "react"
import { DataContext } from "../App"
const Menu = ()=>{
    const {setAppstate}=useContext(DataContext)
    return(
        <div className="menu">
            <h1><img src="one.png"></img></h1>
            <button onClick={()=>setAppstate('quiz')}>Start the Quiz</button>
        </div>
    )
}

export default Menu