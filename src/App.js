import React from 'react';
import './App.css';
import Home from './pages/Home';
// import Search from './pages/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            {/* <h1>This is the search page</h1> */}
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
