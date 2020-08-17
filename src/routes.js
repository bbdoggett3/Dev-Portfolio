import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SkillsMore from './components/SkillsMore';
import ProjectsMore from './components/ProjectsMore';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

export default(
    <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/skillsMore" component={SkillsMore}/>
        <Route path="/projectsMore" component={ProjectsMore}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
);