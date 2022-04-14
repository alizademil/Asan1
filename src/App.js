
import './App.css';
import HelloWorld from './HelloWorld';
import WeatherCC from './components/WeatherCC';
import WeatherFC from './components/WeatherFC';
import Counter from './components/Counter';
import HomePages from './pages/HomePages';

function App() {
  return (
    <div className="App">
      <HomePages />
     <HelloWorld />
     <WeatherCC status= {"sunny"} style={{backgroundColor: "yellow", color: "red"}} />
     <WeatherFC status= {"rainy"} style={{backgroundColor: "grey", color: "green"}}/>
     <Counter />
    </div>
  );
}

export default App;
