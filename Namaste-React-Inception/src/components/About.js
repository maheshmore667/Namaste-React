import "../Styles/About.css";
import Mahesh from "../Assets/MAHESH.png";
import SkillInfo from "./SkillInfo";

const About = () => {

  return (
    <section className="about-section d-flex flex-column align-items-center">
      <div className="profile-image-container my-4">
        <img src={Mahesh} className="profile-image img-fluid" alt="Mahesh" />
      </div>
      <div className="about-text text-center my-2">
        <h3 className="mb-3">About Me</h3>
        <h5>MEAN && MERN Developer & <span>Technical Author</span></h5>
        <p>Hi, I'm Mahesh More. With over 4 years of experience, I specialize in building Single Page Applications using the MEAN/MERN stack.</p>
        <p>Sweet and simple intro, right?</p>
        <div className="data">
          {/* Add SkillInfo component or other content here if needed */}
        </div>
      </div>
    </section>
  );
}


export default About;