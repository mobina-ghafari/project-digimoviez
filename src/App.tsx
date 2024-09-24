import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navigation';
import './styles/main.scss'
import Search from './components/search';
import Slider from './components/slider';
import Cards from './components/cards';

function App() {
  return (
    <div>
      <Nav/>
      <Slider/>
      <Search/>
      <Cards/>
    </div>
  );
}

export default App;
