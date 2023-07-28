import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CricketerDetails from './pages/CricketerDetails';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:cricketer" component={CricketerDetails} />
        <Route component={NotFound} /> {/* This will handle all unmatched routes */}
      </Switch>
    </Router>
  );
};

export default App;
