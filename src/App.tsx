import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Toolbar from './components/Toolbar/Toolbar';
import Portfolio from './containers/Portfolio/Portfolio';
import FindItemGame from './containers/FindItemGame/FindItemGame';
import ModalsContainer from './containers/ModalsContainer/ModalsContainer';
import UsersContainer from './containers/UsersContainer/UsersContainer';

const App = () => {
  return (
    <>
      <header className="mb-3">
        <Toolbar/>
      </header>
      <main className="main container-xl">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/portfolio" element={<Portfolio/>}>
            <Route path="find-item-game" element={<FindItemGame/>}/>
            <Route path="modals" element={<ModalsContainer/>}/>
            <Route path="users-list" element={<UsersContainer/>}/>
          </Route>
          <Route path="*" element={<h1>Page not a Found!</h1>}/>
        </Routes>
      </main>
      <footer className="navbar navbar-expand-lg p-0 bg-warning">
        <div className="container-xl text-white py-5 pb-4 d-flex justify-content-center flex-column align-items-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda,
            debitis esse ex expedita laboriosam modi nihil officiis porro vero!</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </footer>
    </>
  );
};

export default App;