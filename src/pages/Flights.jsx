import DatePicker from "../components/DatePicker/DatePicker"
import { useId, useState } from "react"
import "./flights.css"


const Flights = () => {
  const today = toMidnight(new Date());
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(departureDate);
  const [isReturn, setIsReturn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `You have booked a ${isReturn ? 'return' : 'one-way'} flight ${isReturn ? 'departing ' : ''}on ${departureDate.toLocaleDateString()}${isReturn ? ` and returning on ${returnDate.toLocaleDateString()}` : ''}`
    alert(message)
  }

  console.log(departureDate, returnDate)
  const id = useId();

  return (
    <div>
      <h1 id={`flights-${id}`}>Book your flight</h1>
      <form className="flights"
        onSubmit={handleSubmit}
        aria-labelledby={`flights-${id}`}
      >
        <select onChange={(e) => setIsReturn(e.target.value === 'return')} aria-label="Flight type">
          <option value="one-way">One way</option>
          <option value="return">Return</option>
        </select>
        <DatePicker label="Departure" date={departureDate} onChange={setDepartureDate} min={today} required />
        {
          isReturn ? (
            <DatePicker label="Return" date={returnDate} onChange={setReturnDate} min={departureDate} required />
          ) : null
        }
        <button type="submit">Book</button>
      </form>
    </div>
  )
}

export default Flights;

function toMidnight(date) {
  return new Date(date.setUTCHours(0, 0, 0, 0))
}
