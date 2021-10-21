import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast/Forecast';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast/>
        {/* add weather fetching components */}
      </main>
      <footer>
        Page created by Anshansh
      </footer>
    </div>
    )
  }
}

// function App() {
//   return (
    
//   );
// }

export default App;
