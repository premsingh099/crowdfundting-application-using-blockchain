import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import CreateProject from './components/CreateProject';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={ProjectList} />
                <Route path="/project/:id" component={ProjectDetail} />
                <Route path="/create" component={CreateProject} />
            </Switch>
        </Router>
    );
};

export default App;
