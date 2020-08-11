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

        {/* -- Footer- */}
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/* -- Footer Location-- */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            19 Steve Yzerman Drive
                            <br />
                            Detroit, MI 48226
                        </p>
                    </div>
                   {/* -- Footer Social Icons-- */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    {/* -- Footer About Text-- */}
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About BoJo</h4>
                        <p class="lead mb-0">
                            BoJo is a free to use, MIT licensed React app created by Trevor tarpinian
                            <br />
                            <a href="https://github.com/tmtarpinian/bourbon_journal_frontend">Find the Code Here</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* -- Copyright Section-- */}
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © Trevor Tarpinian 2020</small></div>
        </div>


      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
