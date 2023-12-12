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
    <div className="intro-home">
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            <span className="home__title-color">
              {localStorage.getItem("name")} 👋
            </span>
            <br />
            How are you?
          </h1>
          <span className="button" id="bttn">
            Play a Quiz !
          </span>
        </div>
        <div className="introimg">
          <img
            src="./images/6203326.jpg"
            alt="intro-image"
            className="intro-img"
          />
        </div>
      </section>
    </div>
  );
}

export default Intro;
