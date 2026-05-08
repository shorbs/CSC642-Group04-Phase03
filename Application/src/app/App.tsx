import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ColorblindProvider } from './context/ColorblindContext';

export default function App() {
  return (
    <ColorblindProvider>
      <RouterProvider router={router} />
    </ColorblindProvider>
  );
}