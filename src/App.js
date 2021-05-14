import './App.css';
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Videos from './components/Videos';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Videos />
      <Category channel="NikeShoes"/>
      <Footer />
    </div>
  );
}

export default App;
