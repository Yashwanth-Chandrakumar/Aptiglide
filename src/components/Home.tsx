import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import IntroGrid from "./IntroGrid";
import Mainfooter from "./Mainfooter";
import Collections from "./Collections";
import Loader from "./Loader";
import Guided from "./Guided";


function Home() {
  const [showLoader, setShowLoader] = useState(true);

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

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Intro />
          <IntroGrid />
            <Collections />
            <Guided/>
          <Mainfooter />
        </div>
      )}
    </div>
  );
}

export default Home;
