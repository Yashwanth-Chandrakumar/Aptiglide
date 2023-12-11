import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
function Login() {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/home");
    }
  }, []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const [valid, setValid] = useState(true);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/",
        loginData
      );
      const successMessage = "Login successful";

      if (response.data.startsWith(successMessage)) {
        const userName = response.data.substring(successMessage.length).trim();
        localStorage.setItem("name", userName);
        localStorage.setItem("auth", true.toString());
        console.log("Welcome, " + userName);
        setValid(true);
        navigate("/home");
      } else {
        console.error("Unexpected response format:", response.data);
        setValid(false);
      }
    } catch (error) {
      console.error("Error during login:", error); // Handle login error
      setValid(false);
    }
  };
  return (
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div id="lgcard" className="card cascading-right">
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Welcome to Aptiglide</h2>
              <p className="invalid-credentials" style={{ display: valid ? "none" : "block" }}>Enter valid credentials</p>
              <form onSubmit={onSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={loginData.email}
                    name="email" // Add name attribute
                    id="form3Example3"
                    className="form-control"
                    onChange={handleChange}
                  />
                  <label className="form-label">Email address</label>
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    value={loginData.password}
                    name="password" // Add name attribute
                    className="form-control"
                    onChange={handleChange}
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="form2Example33"
                    defaultChecked // Use defaultChecked instead of checked
                  />
                  <label className="form-check-label">
                    Subscribe to our newsletter
                  </label>
                </div>

                {/* Removed unnecessary anchor tag */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign In
                </button>

                <div className="text-center">
                  <p>or sign in with:</p>
                  <button type="button" className="btn btn-link" id="gicon">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                  </button>
                </div>

                <div className="text_center">
                  <p>New to Aptiglide</p>
                  <Link
                    to="/register"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0" id="limg">
          <img
            src="./images/5484597.jpg"
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

export default Login;
