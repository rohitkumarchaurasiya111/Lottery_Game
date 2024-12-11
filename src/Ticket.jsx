import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ TicketArr }) {
  return (
    <div className="Ticket">
      {TicketArr.map((curr, index) => {
        return <TicketNum num={curr} key={index}></TicketNum>;
      })}
      {/* We have used Curly Bracket here because Arr.map is JavaScript code.  */}
    </div>
  );
}
