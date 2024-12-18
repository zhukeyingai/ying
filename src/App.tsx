import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-5xl text-blue-400">
      hello word
      <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
    </div>
  );
}

export default App;
