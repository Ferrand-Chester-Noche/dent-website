import React from "react";
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Registration from "./pages/Registration";
import Preconsultation from "./pages/Preconsultation";
import Consultation from "./pages/Consultation";
import Postconsultation from "./pages/Postconsultation";
 
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/services" element={<Services />} />
                <Route path="/registration" element={<Registration />}/>
                <Route path="/preconsulation" element={<Preconsultation />}/>
                <Route path="/consultation" element={<Consultation />}/>
                <Route path="/postconsulation" element={<Postconsultation />}/>
            </Routes>
        </Router>
    );
}
 
export default App;