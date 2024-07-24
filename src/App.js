
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/mainPage/main';
import NavBar from './components/navBar/navBar';
import About from './components/about/about';
import Contact from './components/contacts/Contact';
import getNews from './services/routes';
import React,{useState,useEffect} from 'react';


function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(data => {
      setNews(data);
    });
  }, []);


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main news={news} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
