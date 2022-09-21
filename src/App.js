
import './App.css';

import NavBar from './navbar/Navbar';
import ItemListContainer from './itemlistcontainer/ItemListContainer'
import ItemListContainers from './itemlistcontainer/ItemListContainers'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainers greeting={"HOLA HOLA HOLA"} />
      <ItemListContainer />          
    </div>

  );
}

export default App;
