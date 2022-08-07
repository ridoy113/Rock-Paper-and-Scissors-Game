import './App.css';
import Player from './Player';



const weapons = ["rock", "paper", "scissors"];

function App() {


  // state = {
  //   playerOne: weapons[0],
  //   plyerTwo: weapons[0],
  //   winner: ""
  // }


  return (
    <>
      <h1>Rock Paper Scissors</h1>


      <div>
        <Player />
      </div>


      <div>
        <button className='weaponBtn'>
          Rock
        </button>

        <button className='weaponBtn'>
          Paper
        </button>

        <button className='weaponBtn'>
          Scissors
        </button>
      </div>

      <div className='winner'>

      </div>
    </>
  );
}

export default App;
