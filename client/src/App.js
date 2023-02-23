import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import Search from './components/Search';
import Carrousel from './components/Carrousel';
import HomePage from './components/HomePage';
import SingleAnimal from './components/SingleAnimal';
import '../src/css/App.css';
import AboutMe  from './components/AboutMe';
import ReportarAbuso  from './components/ReportarAbuso';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/css/contact.css'




function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><HeaderBar /> <Carrousel/> <HomePage/> <FooterBar/> </>
    },
    {
      path:"/about",
      element:<> <HeaderBar /> <AboutMe />  </>
    },
    {
      path: "/reportarabuso",
      element: <> <ReportarAbuso/> </>
    },
  ]);

  return (
    <div className="App">
     
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
