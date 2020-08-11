import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import indexReducer from './reducers/index';
import Footer from './components/Footer';

const store = createStore(indexReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <div>
      {/* -----------Navigation-------------- */}
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/bourbons">Bourbons</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/categories">All Categories</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/bourbons/new">Add a Bourbon</a></li>
                    </ul>
                </div>
            </div>
        </nav>

                {/* -- Masthead -- */}
        <header class="masthead text-white text-center">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-xl-9 mx-auto">
                <h1 class="mb-5">BOJO</h1>
                <h2 class="mb-5">A Sanctuary for the Bourbon Curate</h2>

              </div>
            </div>
          </div>
        </header>

        <Route exact path="/bourbons" component={App} />

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
