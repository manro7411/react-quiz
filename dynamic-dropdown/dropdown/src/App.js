
import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Food from './components/Food';
import MenuData from './data/MenuData'

function App() {
  const [food, setFood] = useState(MenuData)

  const changeFoodData = (e) => {
    const category = e.target.value
    //กรองข้อมูล
    if (category === "เมนูทั้งหมด") {
      setFood(MenuData)
    } else {
      const result = MenuData.filter((element) => {
        return element.menu === category

      })
      setFood(result)
    }
  }
  // function and props
  //ส้งไปทำ components  อื้น
  return (
    <div className='container'>
      <Dropdown changeFoodData={changeFoodData} />
      <div className='content'>
        {food.map((data, index) => {
          return <Food key={index} {...data} />
        })}
      </div>
    </div>
  );
}

export default App;
