import React from "react";
import "../Styles/Components/Experience.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import languages from "../Data/Languages";
import others from "../Data/Others";

const Experience = () => {
  return (
    <>
      <div className="title">
      <span>02. </span>
        <h1> Experience</h1>
      </div>
      <section id="experience">
        <div className="lang">
          {languages.map((data) => (
            <div className="data" key={data.id}>
              {data.icon}
              <p>{data.name}</p>
            </div>
          ))}
        </div>

        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/private_files/lf30_igfaivqx.json"
          style={{ height: "500px", width: "500px" }}
        ></Player>

        <div className="lang">
          {others.map((data) => (
            <div className="data" key={data.id}>
              {data.icon}
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
