import React, { useReducer, useMemo } from 'react';
import Header from '../components/organisms/header'
import { SearchContext } from './store/SearchContext';
import { reducer } from './store/reducer';
import { initialState } from './store/initialState';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './homepage'
import './app.css'
import { IContext } from './store/interfaces';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = useMemo<IContext>(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  
  return (
    <SearchContext.Provider value={store}>
      <Router>
        <Header />
        <div className="container-fluid">
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    </SearchContext.Provider>
  );
};

export default App;
