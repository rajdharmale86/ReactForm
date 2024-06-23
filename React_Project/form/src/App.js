import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './components/Index';
import SummaryPage from './components/SummaryPage';
const App = () => {
 

  const approuter = createBrowserRouter([
    {
      path: '/',
      element: <Index/>,
    },
    {
      path: '/summary',
      element: <SummaryPage/>,
    },
    
  ]);

  return <RouterProvider router={approuter} />;
};

export default App;
