import "./App.css";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";

const App = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand">Capybaras</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about-us" className="nav-link">About us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="main">
               <Routes>
                   <Route path="/" element={<Home />}/>
                   <Route path="/about-us" element={<AboutUs />}/>
                   <Route path="/contacts" element={<Contacts />}/>
                   <Route path="*" element={<h1>Page not a Found!</h1>}/>
               </Routes>
            </main>
            <footer></footer>
        </>
    );
};

export default App;