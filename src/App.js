import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";

//  PAGES
import Home from "./pages/Home";

// Projects
import Jumpstart from "./projects/Jumpstart";
import ABCCarPortal from "./projects/ABCCarPortal";
import ABCJobPortal from "./projects/ABCJobPortal";
import KYN from "./projects/KnowYourNeighborhood";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={
                        <>
                            <Header />
                            <Home />
                        </>
                    } />
                <Route exact path="/jumpstart" element={<Jumpstart />} />
                <Route exact path="/abc-car-portal" element={<ABCCarPortal />} />
                <Route exact path="/abc-job-portal" element={<ABCJobPortal />} />
                <Route exact path="/know-your-neighborhood" element={<KYN />} />
            </Routes>

            <Footer />
        </HashRouter>
    );
}

export default App;
