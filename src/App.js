import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Info from "./Info/Info";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/info/:id" element={<Info/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
