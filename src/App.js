import './styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router'
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
