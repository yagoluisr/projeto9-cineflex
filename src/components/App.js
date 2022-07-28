import "./Css/reset.css";
import "./Css/style.css";
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
            <Header />

            <TittlePage />

            {/* <Main /> */}

            {/* <Sessions /> */}

            {/* <Seats /> */}

            <Sucess />

            <Footer />

        </>
    )
}