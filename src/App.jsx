import { useState } from 'react';
import Mui from './Mui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Mui />
    </div>
  );
}

export default App;
