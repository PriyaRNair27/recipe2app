import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Recipeadd from './Components/Recipeadd';
import Recipesearch from './Components/Recipesearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipeview from './Components/Recipeview';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Recipeadd/>}/>
       <Route path="/search" exact element={<Recipesearch/>}/>

       <Route path="/view" exact element={<Recipeview/>}/>



     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
