import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SkillsMore from './components/SkillsMore';
import ProjectsMore from './components/ProjectsMore';
import AboutMore from './components/AboutMore';
import ContactMore from './components/ContactMore';
import Welcome from './components/Welcome';
import Heart from './components/Heart';
import Pound from './components/Pound';

export default(
    <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/skillsMore" component={SkillsMore}/>
        <Route path="/projectsMore" component={ProjectsMore}/>
        <Route path="/aboutMore" component={AboutMore}/>
        <Route path="/contactMore" component={ContactMore}/>
        <Route path="/heart" component={Heart}/>
        <Route path="/pound" component={Pound}/>
    </Switch>
);