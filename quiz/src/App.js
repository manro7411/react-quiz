import { useState } from 'react';
import Menu from './components/menu';
import Quiz from './components/Quiz';
import Score from './components/score';
import './App.css';
import { createContext } from 'react';


export const DataContext = createContext()


function App() {
  const [appState, setAppstate] = useState('menu')
  const [score,setscore] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppstate,score,setscore}}>
      <div className="App">
        <h1>Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}
export default App;
