import "./skills.scss";
import { useState } from "react";

export default function skills({ id, title, active, setSelected }) {
  return (
    <div class="skill-section" id="skills">
    <div class="skill-section-heading">
        <h1>Skills</h1>
    </div>
    <div class="skills">
        <div class="skills-content">
          <div className = "skillset"> <h3>HTML</h3><span class="bar"><span class="html"></span></span> </div>
            
            <div className = "skillset"><h3>CSS</h3><span class="bar"><span class="css" ></span></span></div>
            <div className = "skillset"><h3>Javascript</h3><span class="bar"><span class="javascript"></span></span></div>
            <div className = "skillset"><h3>React</h3><span class="bar"><span class="react"></span></span></div>
            </div>
      </div>
    </div>
  );
}