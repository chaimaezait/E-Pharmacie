import React from 'react';
//import data from './data.js';
import{BrowserRouter,Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open")
  };
  const closeMenu =()=>{
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <Link to="/">e-pharmacie</Link>
                </div>
                <div className="header-links">
                    <a href="cart.html"> Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
          
            <aside className="sidebar">
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Pharmacie</a>
                    </li>
                    <li>
                        <a href="index.html">Bien-etre Nutrition</a>
                    </li>
                    <li>
                        <a href="index.html">Beauté Soins</a>
                    </li>
                    <li>
                        <a href="index.html">Hygiène Premiers soins</a>
                    </li>
                    <li>
                        <a href="index.html">Bébé Maman</a>
                    </li>
                    <li>
                        <a href="index.html">Bio Médecines naturelles</a>
                    </li>
                    <li>
                        <a href="index.html">Matériel Médical</a>
                    </li>
                    <li>
                        <a href="index.html">Promotion</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                  <Route path="/product/:id"  component={ProductScreen}/>
                  <Route path="/" exact={true} component={HomeScreen}/>
                  

                </div>
                
            </main>
            <footer className="footer">
                All right reserved 
            </footer>
        </div>
        </BrowserRouter>
    
  );
}

export default App;
