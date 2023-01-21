import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" component = {()=>{<Home />}}/>
        <Route path="/:ctg" component = {()=>{<Home />}}/>
      </Routes>
    </div>
  );
}

export default App;
