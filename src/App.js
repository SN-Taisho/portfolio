import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";

//  PAGES
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/job-portal" element={<JobPortal />} /> */}
        {/* <Route path="/car-portal" element={<CarPortal />} /> */}
        {/* <Route path="/know-your-neighborhood" element={<KYN />} /> */}
    </Routes>
</HashRouter>
  );
}

export default App;
