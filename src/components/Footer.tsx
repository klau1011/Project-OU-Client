import React, {FC} from "react";
import "./Footer.css";

// footer
const Footer: FC = () => {
  return (
    <>
      <div className="big-container">
        <p className="thing" style={{ color: "#737373" }}>
          Feel free to message me at{" "}
          <a href="https://www.instagram.com/kxvxn.l/" target="_blank" rel="noreferrer">
            @kxvxn.l
          </a>{" "}
          on Instagram if you have any suggestions!
        </p>
      </div>
    </>
  );
}

export default Footer;
