import React from 'react';
import { CssBaseline} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Map from './components/Map/Map';
import ReadMore from './components/ReadMore/ReadMore';

const App = () => {
  return (
    <Router>
    <CssBaseline/>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/explore' component={Map} />
    <Route exact path='/explore:city' component={Map} />
    <Route exact path='/read_more' component={ReadMore} />
    <Map/>
    <ReadMore/>
    </Switch>
    </Router>
  )
}

export default App