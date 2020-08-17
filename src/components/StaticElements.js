import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             {/* -----------Navigation-------------- */}
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                <Link to="/" className="navbar-brand js-scroll-trigger" >BOJO</Link>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/categories/1" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Bourbons</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/bourbons" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">All Drinks</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/categories" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Categories</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to="/bourbons/new" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Add a Label</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const MastHead = () => {
    return (
        <div>
                 {/* -- Masthead -- */}
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                <h1 className="mb-5">A Sanctuary for the Bourbon Curate</h1>

              </div>
            </div>
          </div>
        </header>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* -- Footer Location-- */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            19 Steve Yzerman Drive
                            <br />
                            Detroit, MI 48226
                        </p>
                    </div>
                   {/* -- Footer Social Icons-- */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Follow Us Here</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    {/* -- Footer About Text-- */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About BoJo</h4>
                        <p className="lead mb-0">
                            BoJo is a free to use, MIT licensed React app created by Trevor Tarpinian
                            <br />
                            <a href="https://github.com/tmtarpinian/bourbon_journal_frontend">Find the Code Here</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* -- Copyright Section-- */}
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright © Trevor Tarpinian 2020</small></div>
        </div>
        </div>
    )
}

export {
    Header,
    MastHead,
    Footer
}