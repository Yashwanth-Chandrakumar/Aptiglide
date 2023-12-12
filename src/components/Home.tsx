import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Intro from "./Intro";
import IntroGrid from "./IntroGrid";
import Mainfooter from "./Mainfooter";
// import Collections from "./Collections";
import Loader from "./Loader";
import Guided from "./Guided";
import Contests from "./Contests";

function Home() {
  localStorage.setItem("livetab", "home");

  
  const [showLoader, setShowLoader] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (!navigator.onLine) {
        setShowLoader(true);
      }
    };

    window.addEventListener("offline", handleOnlineStatus);
    window.addEventListener("online", handleOnlineStatus);

    if (document.readyState === "complete") {
      setShowLoader(false);
    } else {
      window.onload = () => {
        setShowLoader(false);
      };
    }

    return () => {
      window.removeEventListener("offline", handleOnlineStatus);
      window.removeEventListener("online", handleOnlineStatus);
      window.onload = null; 
    };
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem("auth") === "false") {
        navigate("/");
      }
    }
    catch (error) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          {/* <Loader/> */}
            <NavBar />
            <Intro />
            <Contests/>
          <IntroGrid />
            {/* <Collections /> */}
            <Guided />
            
        <Mainfooter />
        </div>
      )}
    </div>
  );
}

export default Home;
