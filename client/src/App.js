import AllUser from './Component/AllUser';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DemoUser from "./Component/DemoUser"
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllUser} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        
        </Switch>
        
    </BrowserRouter>
  );
}

export default App;