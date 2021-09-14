import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer","Analyst"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/person.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Rafael Murillo</h1>
          
          <h3>
            Web <span ref={textRef}></span>
          </h3>
          <p><i>I design and deploy websites for clients with a major focus on 
            creativity and versatility.</i>
          </p>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
