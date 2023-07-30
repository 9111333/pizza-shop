import './App.css';
import { Route ,Routes, useRoutes } from 'react-router-dom';
import ChefSuggest from './Components/ChefSuggest/ChefSuggest';
import GreenFooter from './Components/GreenFooter/GreenFooter';
import Header from './Components/Header/Header';
import MainLabel from './Components/MainLabel/MainLabel';
import PizzaHovers from './Components/PizzaHovers/PizzaHovers';
import RedDiv from './Components/RedDiv/RedDiv';
import TenYears from './Components/TenYears/TenYears';
import ThreeLabels from './Components/ThreeLabels/ThreeLabels';
import routes from './routes'


function App() {

  const router = useRoutes (routes)

  return (
    <>
      {router}
    </>
  );
}

export default App;
