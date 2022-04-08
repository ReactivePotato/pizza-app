import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router'

import MainPage from './components/MainPage';
import Cart from './components/Cart';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
