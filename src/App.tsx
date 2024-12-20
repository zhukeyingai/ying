import { useState } from 'react';
import { Button } from '@douyinfe/semi-ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full flex flex-col justify-center gap-6">
      <div className="flex items-center justify-center">
        <div className="text-2xl text-[#e656a3] font-bold">I am Zhu Keying</div>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
      </div>
    </div>
  );
}

export default App;
