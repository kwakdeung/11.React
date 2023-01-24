
import './App.css';
import { Home, Topics,Contact } from './components/mycomponents';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello React Router DOM</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Topics">Topics</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Topics">Topics</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <ul>
          <li><NavLink ex to="/">Home</NavLink></li>
          <li><NavLink to="/Topics">Topics</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/Topics"><Topics></Topics></Route>
        <Route path="/Contact"><Contact></Contact></Route>
        <h3>Switch 적용</h3>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/Topics"><Topics></Topics></Route>
          <Route path="/Contact"><Contact></Contact></Route>
          <Route path="/">404 : Page Not Found</Route>
        </Switch>        
      </div>
    </BrowserRouter>  
  );
}

export default App;
