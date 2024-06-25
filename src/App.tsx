import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Toolbar from "./components/Toolbar/Toolbar";

const App = () => {
    return (
        <>
            <header className="mb-3">
                <Toolbar />
            </header>
            <main className="main container-xl">
               <Routes>
                   <Route path="/" element={<Home />}/>
                   <Route path="/about" element={<About />}/>
                   <Route path="/contacts" element={<Contacts />}/>
                   <Route path="*" element={<h1>Page not a Found!</h1>}/>
               </Routes>
            </main>
            <footer className="navbar navbar-expand-lg p-0 bg-warning">
                <div className="container-xl py-4 d-flex justify-content-center align-items-center">
                    <p className="text-white text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda, debitis esse ex expedita laboriosam modi nihil officiis porro vero!</p>
                </div>
            </footer>
        </>
    );
};

export default App;