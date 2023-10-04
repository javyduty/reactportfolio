import React from 'react';
import '../App.css';
import './WelcomePage.css';

const WelcomePage = () => {
    const pupils = document.querySelectorAll(".cloud-iris");
    window.addEventListener("mousemove", (e) => {
      pupils.forEach((pupil) => {
            var rect = pupil.getBoundingClientRect();
            var x = (e.pageX - rect.left) / 30 + "px";
            var y = (e.pageY - rect.top) / 30 + "px";
            pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
      });
    });
  return (
    <div id="welcome-section" className="welcome-section">
      <div className="cloud">
          <div className="cloud-eyes">
              <div className="cloud-pupil">
                  <div className="cloud-upper-eyelid"></div>
                  <div className="cloud-iris"></div>
                  <div className="cloud-lower-eyelid"></div>
              </div>
              <div className="cloud-pupil">
                  <div className="cloud-upper-eyelid"></div>
                  <div className="cloud-iris"></div>
                  <div className="cloud-lower-eyelid"></div>
              </div>
          </div>
          <div className="lower">
              <div className="cheeks"></div>
              <div className="mouth"></div>
              <div className="cheeks"></div>
          </div>
      </div>
      <h1><span id="single-char">J</span>avier <span id="single-char">S</span>antana,
        <div id="hidden"></div>
        <span id="welcome-animation">Cloud Engineer</span>
      </h1>
      <p>Producing creative software solutions</p>
    </div>
  );
};

export default WelcomePage;
