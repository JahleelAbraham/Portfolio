import React from "react";
import "./Terminal.css";
import { Termynal } from "../utils/termynal.js";

function Terminal({ Start = () => {} }) {
  let terminalRef = React.useRef(false);

  React.useEffect(() => {
    if (terminalRef.current) return;
    terminalRef.current = true;

    new Termynal(document.getElementById("startup")!, {
      startDelay: 100,
      lineDelay: 200,
      typeDelay: 30,
      progressChar: "#",
      onEnd: Start,
    });
  }, [Start]);

  return (
    <>
      <div id="startup" data-termynal className="bg-base-100">
        <span data-ty>Starting Machine...</span>
        <span data-ty="progress"></span>
        <span data-ty className="text-success">
          OK!
          <br />
          <br />
          <br />
          <br />
        </span>
        <span data-ty>
          Welcome to <strong>JOS</strong>!
        </span>
        <span data-ty>
          As a programmer, I have spent countless hours staring at a screen,
          trying to make sense of code that looks like a bowl of spaghetti. But
          don't worry, I've untangled my fair share of noodles and even turned
          them into delicious programs! I have a knack for debugging that would
          make Sherlock Holmes jealous and can write code so efficient it would
          put Marie Kondo to shame. If you need someone to turn your programming
          problems into a good laugh, look no further than me, your friendly
          neighborhood programmer. (Courtesy of ChatGPT)
        </span>
        <span data-ty></span>
        <span data-ty="input" className="text-warning">
          ./JahleelPortfolio --showcase
        </span>
        <span data-ty></span>
      </div>
    </>
  );
}

export default Terminal;
