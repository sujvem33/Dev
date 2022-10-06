import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import  './style.css';
function App() {
  return (
    <div className="App">
      <h1>React Tactoe</h1>
      <Header />
      <div className="Player">
     <div className="Suji"> <Player  WhichPlayer='X' Score='50'/> </div>
     <div className="Siva"> <Player  WhichPlayer='O' Score='100'/></div>
     </div>
      <Board />
    </div>
  );
}

export default App;
