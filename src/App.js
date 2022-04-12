
import './App.css';
import HelloWorld from './HelloWorld';
import WeatherCC from './components/WeatherCC';
import WeatherFC from './components/WeatherFC';

function App() {
  return (
    <div className="App">
     <HelloWorld />
     <WeatherCC status= {"sunny"} style={{backgroundColor: "yellow", color: "red"}} />
     <WeatherFC status= {"rainy"} style={{backgroundColor: "blue", color: "green"}}/>

    </div>
  );
}

export default App;
