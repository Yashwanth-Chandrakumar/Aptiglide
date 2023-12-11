import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import axios from "axios";
function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const { fname, lname, email, password } = user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  // const InvalidCredentialsMessage: React.FC = () => {
  //   const [displayMessage, setDisplayMessage] = useState(true);
  
  //   useEffect(() => {
  //     setDisplayMessage(true);
  
  //     const timeoutId = setTimeout(() => {
  //       setDisplayMessage(false);
  //     }, 5000);
  
  //     return () => clearTimeout(timeoutId);
  //   }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/user",
        user
      );
      console.log("Data successfully sent to the server!");
      navigate("/");
    } catch (error) {

      console.error("Error sending data to the server:", error);
    }
  };

  return (
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card cascading-right">
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5" id="welcome">Welcome :)</h2>
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="fname" // Use a unique ID for each input field
                        value={fname}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lname" // Use a unique ID for each input field
                        value={lname}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label">Last Name</label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email" // Use a unique ID for each input field
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password" // Use a unique ID for each input field
                    value={password}
                    onChange={handleChange}
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
                    defaultChecked
                  />
                  <label className="form-check-label">
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign up
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
            src="./images/5188350.jpg"
            height="700vh"
            width="700vw"
            className="rounded-100 shadow-100"
            alt="register"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
