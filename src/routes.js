import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from "./App";
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

export default(
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/welcome" component={Welcome}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
);