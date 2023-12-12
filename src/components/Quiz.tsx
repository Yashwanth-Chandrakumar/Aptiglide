import NavBar from "./NavBar";
import Loader from "./Loader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Quiz() {
  localStorage.setItem("livetab", "quiz");

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
    } catch (error) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      
        <div>
          <NavBar />
          <div className="quiz-body">
            <div className="quiz-contest">
              <h4>Trending Quizzes for you.</h4>
              <div className="quiz-nav">
                <input
                  type="text"
                  placeholder="Search quizzes"
                  className="quiz-search"
                />
                <div className="quiz-sort">
                <Accordion style={{ boxShadow: 'none', border: '1px solid var(--btncolor)', borderRadius: '5px',width:'40%'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Difficulty</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none', border: '1px solid var(--btncolor)', borderRadius: '5px',width:'40%'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Sort by</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                </div>
              </div>
              <div className="quiz-collection">
                <div className="quiz-category">
                  <h5>Categories</h5>
                  <div className="quiz-accordion">
                    <Accordion style={{ boxShadow: 'none', borderBottom:'1px solid var(--btncolor)', borderRadius: '5px',alignSelf:'flex-start' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Aptitude</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none', borderBottom:'1px solid var(--btncolor)', borderRadius: '5px',alignSelf:'flex-start' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>Alogorithms</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
                <div className="quiz-quizzes">
                <h5> Quizzes</h5>
                {/* <div className="quiz-column">
                  <p style={{alignSelf:"flex-start"}}>Problem Title</p>
                  <p>Difficulty</p>
                  <p>Attempted</p>
                  <p>Exp</p>
                </div> */}
                <div className="quiz-details">
                <table>
    <thead className="thead">
      <tr>
        <th>Problem Title</th>
        <th>Difficulty</th>
        <th>Attempted</th>
        <th>Exp</th>
      </tr>
    </thead>
                    <tbody>
                      
      <tr className="quiz-row">
        <td>Pascal's Triangle</td>
        <td>Easy</td>
        <td>Yes</td>
        <td>50</td>
                      </tr>
                      <tr className="rowgap">
                        
                      </tr>
      <tr className="quiz-row">
        <td>Pascal's Triangle</td>
        <td>Easy</td>
        <td>Yes</td>
        <td>50</td>
      </tr>
    </tbody>
  </table>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
