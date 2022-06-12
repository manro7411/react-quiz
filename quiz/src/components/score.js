import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"


const Score = () => {
    const { score,setAppstate, setscore } = useContext(DataContext)
    const restartApp = () => {
        setscore(0)
        setAppstate("menu")

    }
    return (
        <div className="score">
            <h1>Score Concursion</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>Re Quiz</button>
        </div>
    )
}
export default Score