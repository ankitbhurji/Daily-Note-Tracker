import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";


function App() {
  return (
    <div>
      <Routes basename="/">
        <Route path="/" element={<Home/>}/>
        <Route path="/:ctg" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
