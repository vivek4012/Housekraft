import Configurationpage from "./pages/configurationpage";
import Home from "./pages/Home";
import Finalcart from "./pages/finalcart";
// import Testcart from "./pages/testcart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path= {"/" } index element={<Home/>} />
        <Route path={"configuration"}  element={<Configurationpage/>} />
        <Route path={"checkout" } element={<Finalcart/>} />
        {/* <Route path={"test1"} element ={<Testcart />} /> */}
        
    </Routes>
  );
}

export default App;
