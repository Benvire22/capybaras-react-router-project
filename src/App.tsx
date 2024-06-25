import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import logo from "./assets/img/logo.png";

const App = () => {
    return (
        <>
            <header className="mb-3">
                <nav className="navbar navbar-expand-lg p-0 bg-warning" data-bs-theme="dark">
                    <div className="container-xl">
                        <NavLink to="/" className="navbar-brand"><img src={logo} style={{width: 100}} alt="Capybaras"/></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-4 fs-4">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link">About capybaras</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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