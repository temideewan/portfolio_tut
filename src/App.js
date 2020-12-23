import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Projects from './components/Projects';

import Navbar from './components/Navbar';
function App() {
  return (
  <BrowserRouter>
      <Navbar></Navbar>
    <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/About'/>
      <Route component={SinglePost} path='/post/:slug'/>
      <Route component={Posts} path='/post'/>
      <Route component={Projects} path='/project'/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
