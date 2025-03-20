import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [equipment, setEquipment] = useState('');
  const [position, setPosition] = useState('1');

  function handleSubmit(e) {
    e.preventDefault();

    const newEntry = {
      id: equipment,
      equipment: equipment,
      position: position,
    };

    setData((prevData) => [...prevData, newEntry]);
    console.log(equipment);
    console.log(position);
    setEquipment('');
  }

  useEffect(() => console.log('data checK: ', data), [data]);

  return (
    <>
      <h1>47</h1>
      <ul>
        {data.map((item) => (
          <li key={item.equipment}>
            <p>{item.equipment}</p>
            <p>{item.position}</p>
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
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
