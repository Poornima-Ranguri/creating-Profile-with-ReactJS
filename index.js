const element = (
  <div className="home">
    <h1 className="heading">Congratualations</h1>
    <div className="card-conatiner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />

      <p className="para">
        Vishnu Institute of Computer Education and Technology, <br />
        Bhimavaram
      </p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
