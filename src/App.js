import MainPage from './components/MainContent';
import Header from './components/Header';
import Filters from './components/Filters';
import Footer from './components/Footer';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
