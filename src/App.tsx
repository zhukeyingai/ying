import { useState } from 'react';
import { Button } from '@douyinfe/semi-ui';
import Card from './Layout/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full flex flex-col justify-center items-center gap-6">
      <div className="text-2xl text-[#e656a3] font-bold">I am Zhu Keying</div>
      <Card title="hello" />
      <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
    </div>
  );
}

export default App;
