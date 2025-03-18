import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>47</h1>
      <form>
        <input type="text" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
