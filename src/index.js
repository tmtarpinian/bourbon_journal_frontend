import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import NewBourbon from './containers/NewBourbon'
import BourbonsContainer from './containers/BourbonsContainer'
import CategoriesContainer from './containers/CategoriesContainer'
import CategoriesShowContainer from './containers/CategoriesShowContainer'
import indexReducer from './reducers/index';
import {Header, MastHead, Footer} from './components/StaticElements';


const store = createStore(indexReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <div>
        <Header />
        <MastHead />
        <Route exact path="/" component={App} /> 
        <Route exact path="/bourbons" component={BourbonsContainer} /> 
        <Route exact path="/bourbons/new" component={NewBourbon} /> 
        <Route exact path="/categories" component={CategoriesContainer} />
        <Route exact path="/categories/:id" component={CategoriesShowContainer} />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
