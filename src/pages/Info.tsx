import "./Info.scss";
// Icons
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Info = () => {
  return (
    <div id="info">
      <h1><PiLinkSimpleBold/> Links</h1>
      <ul id="info-list">
        <li>
          <span><FaGithub/></span><a href="https://github.com/cyoung-sudo" target="_blank" rel="noreferrer">Github</a>
        </li>
        <li>
          <span><IoIosMail/></span><a href="mailto:cyoungcs20@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Info;