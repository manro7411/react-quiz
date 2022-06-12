import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { DataContext } from '../App'
import QuestionData from '../data/QuestionsData'
const Quiz = () => {
    console.log(QuestionData)
    const [current, setcurrent] = useState(0)
    const[selectChoice,setselectChoice] = useState('')
    const {score,setscore,setAppstate} = useContext(DataContext)

    useEffect(()=>{
checkAnswer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectChoice])

    const checkAnswer = () =>{
        if (selectChoice !== "") {
            if (selectChoice === QuestionData[current].answer) {
                setscore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
                   // console.log("Wrong")     
            }     
        }
    }
    const nextQuestion = () =>{
        setselectChoice('')
        if (current === QuestionData.length-1) {
            setAppstate('score')
            
        }
        setcurrent(current+1)
    }
    return (
        <div className="quiz">
            <h1>{QuestionData[current].question}</h1>
            <div className='choices'>
                <button onClick={()=>setselectChoice('A')}>{QuestionData[current].A}</button>
                <button onClick={()=>setselectChoice('B')}>{QuestionData[current].B}</button>
                <button onClick={()=>setselectChoice('C')}>{QuestionData[current].C}</button>
                <button onClick={()=>setselectChoice('D')}>{QuestionData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionData.length} `}</p>
        </div>
    )
}
export default Quiz