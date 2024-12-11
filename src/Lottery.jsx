import { useState } from "react";
import Ticket from "./Ticket";
import { genRandom } from "./helper.js";
import Button from "./Button.jsx";

function Lottery({ n = 3, WinningCondition }) {
  const [TicketArr, setTicketArr] = useState(genRandom(n));

  let isWinning = WinningCondition(TicketArr);

  function BuyTicket() {
    setTicketArr(genRandom(n));
  }

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket TicketArr={TicketArr}></Ticket>
      <br></br>
      <Button action={BuyTicket} text={"Get Ticket"}></Button>
      <h3>{isWinning && "Congratutions! You Won"}</h3>
    </div>
  );
}

export default Lottery;
