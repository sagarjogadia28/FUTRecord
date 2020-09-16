import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from "./components/Landing";
import Analysis from "./components/Analysis";
import Weekends from "./components/Weekends";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";

const App = () =>
    <Router>
        <Fragment>
            <Switch>
                <Route exact path={'/'} component={Landing}/>
                <Route path={'/dashboard'}>
                    <NavBar/>
                    <Switch>
                        <Route exact path={'/dashboard/weekends'} component={Weekends}/>
                        <Route exact path={'/dashboard/analysis'} component={Analysis}/>
                        <Route exact path={'/dashboard'} component={Summary}/>
                    </Switch>
                </Route>
            </Switch>
        </Fragment>
    </Router>
export default App;
