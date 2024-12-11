import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper"; 

function App() {

  let WinningSum = 15;
  function WinningCondition(TicketArr) {
    return (sum(TicketArr) === WinningSum)
  }

  return (
    <div>
      <Lottery n={4} WinningCondition={WinningCondition}></Lottery>
    </div>
  );
}

export default App;
