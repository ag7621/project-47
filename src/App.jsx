import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [equipment, setEquipment] = useState('');
  const [position, setPosition] = useState('1');
  const [notes, setNotes] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newEntry = {
      id: equipment,
      equipment: equipment,
      position: position,
      notes: notes,
    };

    setData((prevData) => [...prevData, newEntry]);
    console.log(equipment);
    console.log(position);
    console.log(notes);
    setEquipment('');
  }

  useEffect(() => console.log('data checK: ', data), [data]);

  return (
    <>
      <h1>47</h1>
      <ul>
        {data.map((item) => (
          <li key={item.equipment}>
            <p>Equipment: {item.equipment}</p>
            <p>Position: {item.position}</p>
            <p>Notes: {item.notes}</p>
          </li>
        ))}
      </ul>
      <p>{equipment}</p>
      <form onSubmit={handleSubmit}>
        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Equipment number"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        />
        <input
          type="text"
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
