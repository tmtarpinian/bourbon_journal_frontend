import React from 'react'

const BourbonForm = (props) => {
    return (
        <div id="new-bourbon">
          <h2> Add Your Boubon Here</h2>
          <form onSubmit={props.handleOnSubmit}>
            <p>
              <label> Name: <br/>
                <input className="form-control"
                  type="text"
                  id="name"
                  onChange={props.handleInputChange}
                  placeholder="name"
                />
              </label>
            </p>
            <p>
              <label> Distillery: <br/>
                <input className="form-control"
                  type="text"
                  id="distillery"
                  onChange={props.handleInputChange}
                  placeholder="Distillery"
                />
              </label>
            </p>
            <p>
              <label> Proof: <br/>
                <input className="form-control"
                  type="text"
                  id="proof"
                  onChange={props.handleInputChange}
                  placeholder="How Strong is this?"
                />
              </label>
            </p>
            <p>
              <label> Aged: <br/>
                <input className="form-control"
                  type="text"
                  id="aged"
                  onChange={props.handleInputChange}
                  placeholder="How Old?"
                />
              </label>
            </p>
            <p>
              <label> Flavornotes: <br/>
                <input className="form-control"
                  type="textarea"
                  id="flavornotes"
                  onChange={props.handleInputChange}
                  placeholder="write the flavors you taste here"
                />
              </label>
            </p>
            <p>
              <label> Food Pairing: <br/>
                <input className="form-control"
                  type="text"
                  id="pairing"
                  onChange={props.handleInputChange}
                  placeholder="pair it with any food?"
                />
              </label>
            </p>
            <input type="submit" class="btn btn-block btn-lg btn-primary"/>
          </form>
        </div>
    )
}


export default BourbonForm

// <!-- Call to Action -->
// <section class="call-to-action text-white text-center">
//   <div class="overlay"></div>
//   <div class="container">
//     <div class="row">
//       <div class="col-xl-9 mx-auto">
//         <h2 class="mb-4">Ready to get started? Sign up now!</h2>
//       </div>
//       <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
//         <form>
//           <div class="form-row">
//             <div class="col-12 col-md-9 mb-2 mb-md-0">
//               <input type="email" class="form-control form-control-lg" placeholder="Enter your email...">
//             </div>
//             <div class="col-12 col-md-3">
//               <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up!</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>