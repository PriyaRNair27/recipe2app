import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Recipeadd from './Components/Recipeadd';
import Recipesearch from './Components/Recipesearch';

function App() {
  return (
    <div>
      <Recipeadd/>
      <Recipesearch/>

    </div>
  );
}

export default App;
