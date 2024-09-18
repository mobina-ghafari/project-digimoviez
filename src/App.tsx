import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navigation';
import './styles/main.scss'
import Search from './components/search';
import Slider from './components/slider';

function App() {
  return (
    <div>
      <Nav/>
      <Slider/>
      <Search/>
    </div>
  );
}

export default App;
