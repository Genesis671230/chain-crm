import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import Quality from "./pages/quality/Quality";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-[100vh] w-[100vw] bg-[#F7F7F7] text-white">
        <div className="">
          <Navbar />
        </div>

        <div className="flex">
          <div className="flex-15">
            <Sidebar />
          </div>

          <div className="flex-1 px-12 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/performance" element={<Quality />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
