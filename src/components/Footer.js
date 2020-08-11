import React from 'react'

const Footer = () => {
    return (
        <div>
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
    )
}

export default Footer