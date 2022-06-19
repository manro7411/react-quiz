import './App.css';
import Title from './components/title';
import Content from './components/content';
import { createContext, useState } from 'react'

export const ThemeContext = createContext()
// ใช้ theme context เพื่อเก็บจัวแปรไปใช้ในไฟล์อื่นไ
function App() {
  const [theme, setTheme] = useState('dark')
  return (
    // provider ==> ผู้ส่งข้อมูล
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='main-content'>
        <Title />
        <Content />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
