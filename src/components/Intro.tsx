
function Intro() {
  let name = "Raghul";
  return (
    <div>
    <section className="home bd-grid" id="home">
    <div className="home__data">
      <div>
        <h1 className="home__title">Hi,<br></br><span className="home__title-color">{name} 👋</span><br></br>How are you ?</h1>
        </div>
    <img src="images\6203326.jpg"
    width="40%"
    height="30%"
            className="intro-img" />
    </div>
    <span className="button">
        Play a Quiz !
    </span>

      </section>
  </div>
  );
}
export default Intro;

