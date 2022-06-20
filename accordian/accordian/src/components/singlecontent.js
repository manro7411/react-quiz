import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

/* eslint-disable no-lone-blocks */
const SingleContent = ({ title, description }) => {
    // ดึง title and description มาใช้
    const [showContent, setShowContent] = useState(false)
    // เมื่อ showcontent เป็นเท็จ จะโชว์ description 
    return (

        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowContent(!showContent)}>{showContent ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </header>
            {showContent && <p>{description}</p>}

        </article>
    )
}
export default SingleContent
