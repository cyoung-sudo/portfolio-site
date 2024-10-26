import "./Info.scss";
// Icons
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Info = () => {
  return (
    <div id="info">
      <ul id="info-list">
        <li>
          <a href="https://github.com/cyoung-sudo" target="_blank" rel="noreferrer"><FaGithub size={40}/></a>
        </li>
        <li>
          <a href="mailto:cyoungcs20@gmail.com" target="_blank" rel="noreferrer"><IoIosMail size={40}/></a>
        </li>
      </ul>
    </div>
  );
};

export default Info;