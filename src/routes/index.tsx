import { RouterProvider } from 'react-router-dom';
import router from '@/routes/router';

function App() {
  return (
    <div className="tw-full overflow-hidden overflow-x-auto">
      <div className="tw-full min-w-[1200px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
