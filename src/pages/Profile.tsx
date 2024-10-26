import "./Profile.scss"

const Profile = () => {
  return (
    <div id="profile">
      <div id="profile-left">
        <div id="profile-img">
          <img src="casual-male-avatar-silhouette-2.webp"/>
        </div>
        <h1>&lt;Christopher Young/&gt;</h1>
      </div>

      <div id="profile-right">
        <div>University of California, Santa Cruz</div>
        <div>Computer Science, B.S. <i>(March 2020)</i></div>
        <div>GPA 3.46</div>
      </div>
    </div>
  );
};

export default Profile;