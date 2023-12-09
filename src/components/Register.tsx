import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
function Register() {
  return (
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card cascading-right">
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Welcome :)</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline ">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label">Last Name</label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                  />
                  <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example33"
                    checked
                  />
                  <label className="form-check-label">
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  <a href="#" id="sign">
                    {" "}
                    <Link
                    to="/home"
                    className="btn btn-primary btn-block "
                    id="button1"
                  >
                    Sign up
                  </Link>
                  </a>
                </button>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link" id="gicon">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                  </button>
                </div>
                <div className="text_center">
                  <p>Existing user</p>
                  <Link
                    to="/"
                    className="btn btn-primary btn-block mb-4"
                    id="button1"
                  >
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0" id="limg">
          <img
            src="images\5188350.jpg"
            height="700vh"
            width="700vw"
            className="rounded-100 shadow-100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Register;
