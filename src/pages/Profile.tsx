import "./Profile.scss"
// Icons
import { GiGraduateCap, GiTiedScroll } from "react-icons/gi";
import { MdNumbers } from "react-icons/md";

const Profile = () => {
  return (
    <div id="profile">
      <div id="profile-left">
        <div id="profile-img"></div>
        <h1>Christopher Young</h1>
      </div>

      <div id="profile-right">
        <div>
          <span><GiGraduateCap/></span>University of California, Santa Cruz
        </div>
        <div>
          <span><GiTiedScroll/></span>Computer Science, B.S. <i>(March 2020)</i>
        </div>
        <div>
          <span><MdNumbers/></span>GPA 3.46
        </div>
      </div>
    </div>
  );
};

export default Profile;