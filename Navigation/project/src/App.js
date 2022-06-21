import './App.css';
import Navigation from './components/navigation';
import { Route, Routes } from "react-router-dom"
// Switch เป็นตัวควบคุมในการทำงานแต่ละหน้า
import Home from './components/page/Home';
import Member from './components/page/member';
import Product from './components/page/product';
import Contact from './components/page/Contact';
function App() {
  return (
    //ในการทำ navigation ต้องถูกครอบด้วย Router
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/member" element={<Member />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
//FaBars
//exact เป็นการระบุว่าเป้นหน้าแรก