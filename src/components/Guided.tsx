import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
function Guided() {
  return (
    <div>
      <h2 className="carousel-text">
        Guided Paths
        <button className="grid-sub">
          <span> View all </span>
          <ArrowForwardIcon color="primary" className="arrow" />
        </button>
      </h2>
      <p className="grid-content">
        Test your IQ with our Aptitude tests and problem solving skills with out
        logic tests.
      </p>
      <div className="conteudo coll">
        {" "}
        <div className="carrousel1">
          <article className="card path">
            <LibraryBooksRoundedIcon/>
            
          </article>

          <article className="card path">
          <LibraryBooksRoundedIcon/>
            
          </article>

          <article className="card path">
          <LibraryBooksRoundedIcon/>
            
          </article>
          <article className="card path">
          <LibraryBooksRoundedIcon/>
            
          </article>

          <article className="card path">
          <LibraryBooksRoundedIcon/>
            
          </article>

                  <article className="card path">
                      <div className="path-title">
                          <LibraryBooksRoundedIcon />
                          <h5>Guided path 1</h5>
                      </div>
                      <div className="path-details">
                          <p>
                          Start learning and practicing company-specific questions in c++ for better performance in your interviews. Basics of c++ are what most people fail to understand. Don’t worry, we have covered all the c++ basics and advanced concepts to help you master all necessary concepts with a focus on accuracy and time. So, enroll in the basics of c++ guided path today!
                          </p>
                      </div>
                      
            
          </article>
        </div>
      </div>
    </div>
  );
}

export default Guided;
