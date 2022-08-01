import "./Css/reset.css";
import "./Css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Seats from "./Seats";
import Sessions from "./Sessions";
import Sucess from "./Sucess";



export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/sessoes/:movieId" element={<Sessions />}/>
                    <Route path="/assentos/:seatsId" element={<Seats />}/>
                    <Route path="/sucesso" element={<Sucess />}/>
                </Routes>
            </BrowserRouter>    
        </>
    )
}