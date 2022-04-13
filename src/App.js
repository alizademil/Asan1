
import './App.css';
import HelloWorld from './HelloWorld';
import WeatherCC from './components/WeatherCC';
import WeatherFC from './components/WeatherFC';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     <HelloWorld />
     <WeatherCC status= {"sunny"} style={{backgroundColor: "yellow", color: "red"}} />
     <WeatherFC status= {"rainy"} style={{backgroundColor: "grey", color: "green"}}/>
     <Counter />
    </div>
  );
}

export default App;
