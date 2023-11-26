import "../Styles/About.css";
import Mahesh from "../Assets/MAHESH.png";
const About = () =>{
    return (
        <section className="col-12 d-flex flex-column">
        <div className="col-12" style={{"display" : "flex", "justifyContent" : "center"}}>
          <img src={Mahesh} className="pic" alt=""/>
        </div>
        <div className="text col-12 text-center my-2">
            <h3>About Me</h3>
            <h5>MEAN && MERN Developer & <span>Technical Author</span></h5>
              <p>My name is Mahesh More. having total strong experience of 4+ years building Single page application using (MEAN /MERN) stack.</p>
              <p>Sweet and simple intro I guess!!</p>
            <div className="data">
            {/* <Link to="/" className="hire">Hire Me</Link> */}
            </div>
          </div>
      </section>
      )
}

export default About;