import "./main.css"
import Donate from "../../Donate";
import { Routes, Route, useNavigate } from 'react-router-dom';


function Information3() {
  const navigate = useNavigate();

  const navigateToDonate = () => {
    // 👇️ navigate to /contacts
    navigate('/donate');
  };
  return (
    <div>
      <Routes>
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <div className="section2">
        <h3 style={{ color: "#344767" }}>ISKCON YOUTH FORUM</h3>
        <br></br>
        <p style={{ color: "#7b809a" }}>Youth Forum of ISKCON Chandigarh represents our youth wing. Youngsters can bring massive changes in the world. We too understand this. This is the reason behind the formation of the ISKCON Youth Forum.</p>

        <h4 style={{ color: "#344767" }}>GOALS</h4>
        <ul style={{ paddingLeft: "40px", color: "#7b809a" }}>

          <li>Gaining happiness and self-fulfillment in the life</li>
          <li>Finding the internal potential such as motivation, concentration, tolerance, self-confidence, and kindness.</li>
          <li>      Combining personality with proficiency for long-term success.
          </li>
          <li>      Securing youngsters from self-destructive addictions that harm mind and body.
          </li>
          <li>      Provide soft-skill training like leadership, stress management, time management etc.
          </li>
          <li>
            Provide a sense of balancing between personal and professional life, work and entertainment.
          </li>
          <li>
            Provide scientifically crafted lectures on Vedic intelligence by the highly qualified faculty members.</li>
        </ul>
      </div>

      {/* <video width="600" height="400" controls>
        <source src="IYF-MERN\client\src\assets\video\first.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="section2">
        <div class="container-coursel">
          <div class="carousel">
            <div class="carousel__face"><span>Counselling</span></div>
            <div class="carousel__face"><span>Parsadam</span></div>
            <div class="carousel__face"><span>Lectures</span></div>
            <div class="carousel__face"><span>Meditation</span></div>
            <div class="carousel__face"><span>Fun</span></div>
            <div class="carousel__face"><span>Parsadam</span></div>
            <div class="carousel__face"><span>Trips</span></div>
            <div class="carousel__face"><span>Meditation</span></div>
            <div class="carousel__face"><span>Drama</span></div>
          </div>
        </div>
        <div className="corusel-blank" ></div>
      </div>
      <div className="section2" style={{ color: "#344767" }}>
        <h3 >ACTIVITIES AT A GLANCE:</h3>
        <br></br>
        <ul style={{ paddingLeft: "40px" }}>
          <li>
            <h4>Informative lectures</h4>
            <p style={{ color: "#7b809a" }}>Bringing the hidden potential out in the youth for creating the virtues of self-confidence and motivation through informative and vibrant presentations and lectures.</p>
          </li>

          <li>
            <h4>Art & Drama</h4>
            <p style={{ color: "#7b809a" }}>Cultivating the skills of the youth in the art, music, and drama field by giving them proper opportunities and required assistance.</p>
          </li>

          <li>
            <h4>Presentation and communication skills</h4>
            <p style={{ color: "#7b809a" }}>Improving the communication skills of the youth with the help of PPT (Power Point Presentations) and several debate competitions.</p>
          </li>

          <li>
            <h4>Practical engagement</h4>
            <p style={{ color: "#7b809a" }}>We provide activities such as event management, book distribution, Prasad distribution, cleaning, and so on. These activities are very helpful in building better leadership and team-building skills. They also create a great sense of responsibility in students.</p>
          </li>
        </ul>
      </div>
      <div className="section2-second">
        <div className="section2-black">
          <div className="section2-second-text">
            <h2 style={{ color: "white" }}>BECOME A YOUTH PATRON
            </h2>
            <p style={{ color: "white" }} >Krishna once said that good deeds made, gifted, frugal, and done without faith are shown as no or “assat.” Therefore, neither here nor below is useful. Let us take a step closer to the devotion of Kanha and do our bit to help others in need.</p>
          </div>
        </div>
        <div className="Donate-Button" onClick={navigateToDonate}>

          YOUTH PATRON
        </div>
      </div>

    </div >

  );
}


export default Information3;
