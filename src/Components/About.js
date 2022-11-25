import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "../Styles/Components/About.scss";
import Typewriter from 'typewriter-effect'

const About = () => {
  return (
    <section id="about">
      <div className="me">
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_vnikrcia.json"
          style={{ height: "500px", width: "500px" }}
        ></Player>
        <div className="presentation">
          <h4>
            Hi
            <span>
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_6niurjte.json"
                style={{ height: "30px", width: "30px" }}
              ></Player>
            </span>
            , My name is
          </h4>
          <h2>Adan Ramirez Cisneros</h2>
          <h1>
            <Typewriter 
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "A Junior Frontend developer",
                  "A Junior Web developer",
                  "A Junior React developer"
                ]
              }}
            />
          </h1>
          <p>
            Who likes learn the newest tecnologies. now i learning React js.
          </p>
          <p>I'm looking for a new job, a web developer job.</p>
          <p>i work both frontend and backend.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
