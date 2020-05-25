import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landingpage extends Component {
  render() {
    return (
      <div className="big-div">
        <h1> Welcome,</h1>
        <h4>
          <p>log in to continue</p>
        </h4>
        <div className="form-div">
          <form className="form" noValidate>
            <input type="text" placeholder="Username" required />
            <input type="text" placeholder="Password" required />
            <div>
              <button>
                <Link to="/StartPage" className="Link">
                  login
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Landingpage;
