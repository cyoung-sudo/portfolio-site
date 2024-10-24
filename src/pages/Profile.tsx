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
        <div><GiGraduateCap/> University of California, Santa Cruz</div>
        <div><GiTiedScroll/> Computer Science, B.S.</div>
        <div><MdNumbers/> GPA 3.46</div>
      </div>
    </div>
  );
};

export default Profile;