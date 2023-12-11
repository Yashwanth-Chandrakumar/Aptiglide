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
  const [showLoader, setShowLoader] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    const handleOnlineStatus = () => {
      if (!navigator.onLine) {
        setShowLoader(true);
      }
    };

    window.addEventListener("offline", handleOnlineStatus);
    window.addEventListener("online", handleOnlineStatus);

    window.onload = () => {
      setShowLoader(false);
    };

    return () => {
      clearTimeout(loaderTimeout);
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
