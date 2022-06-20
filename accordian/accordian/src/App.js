/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import SingleContent from './components/singlecontent';
import data from './data';

// data เ้น objext ซึ่งจะต้องมากำหนดอีกที ว่าต้องการดึงข้อมูลตัวไหนมาใช้บ้่าง ซึ่งสามารถ import เข้ามาใช้ได้เลย 

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>เครื่องมือพัฒนาเว็บปี 2021</h3>
        <section>
          {content.map((data)=>{
            return <SingleContent key={data.id} {...data}/>
            // .map ฌป้้นการดึงข้อมูลแต่ละตัวไปใช้

          })}
        </section>

      </div>
    </main>
  
  );
}

export default App;
//react icon
