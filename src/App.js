import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import GetQuotes from './components/GetQuotes';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/GetQuotes" element={<GetQuotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
