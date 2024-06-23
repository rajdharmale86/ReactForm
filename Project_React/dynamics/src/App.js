
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import Summary from './components/Summary';
const App = () => {
  

  const approuter = createBrowserRouter([
    {
      path: '/',
      element: <SurveyForm />,
    },
    {
      path: '/Summary',
      element: <Summary />,
    },
  ]);

  return <RouterProvider router={approuter} />;
};

export default App;
