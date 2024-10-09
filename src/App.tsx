import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navigation';
import './styles/main.scss'
import Search from './components/search';
import Slider from './components/slider';
import Cards from './components/cards';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Nav/>
      <Slider/>
      <Search/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
