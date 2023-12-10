import { useEffect, useState } from "react";
import axios from "axios";

function Intro() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
    console.log(users);
  };

  return (
    <div>
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <div>
            <h1 className="home__title">
              Hi,
              <br />
              <span className="home__title-color">
                {localStorage.getItem("name")} 👋
              </span>
              <br />
              How are you?
            </h1>
          </div>
          <img
            src="./images/6203326.jpg"
            alt="intro-image"
            width="40%"
            height="30%"
            className="intro-img"
          />
        </div>
        <span className="button">Play a Quiz !</span>
      </section>
    </div>
  );
}

export default Intro;
