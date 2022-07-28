import "./Css/reset.css";
import "./Css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Seats from "./Seats";
import Sessions from "./Sessions";
import Sucess from "./Sucess";
import TittlePage from "./TittlePage";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <TittlePage />
                
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/sessions/:movieId" element={<Sessions />}/>
                    {/* <Sessions />

                    <Seats />

                    <Sucess />

                    <Footer /> */}
                </Routes>
            </BrowserRouter>    
        </>
    )
}