
import './App.css';
import { BrowserRouter } from "react-router-dom";

import LinkCompo from './NewComponents/LinkCompo';
import Store from './NewComponents/Store';
// import RouteCompo from './NewComponents/RouteCompo';

function App() {
  return (
   <>
   <BrowserRouter>
   <LinkCompo/>
   <Store/>
   </BrowserRouter>
  
   </>
  );
}

export default App;