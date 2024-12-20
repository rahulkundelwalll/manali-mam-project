import data from "../../data/index.json";

export default function MySkills() {
  const themes = [
    "1.  Innovative Materials and Construction Techniques",
    "2.  Advanced cementitious material for durability",
    "3.  Advanced Testing Techniques for Materials and Structures",
    "4.  Sustainable and Green Infrastructure",
    "5.  Tunneling and High-speed Rails",
    "6.  High Performance Concrete",
    "7.  Service life and life cycle assessment",
    "8.  Nanotechnology in Concrete and Construction",
    "9.  Valorization/ Bio-remediation of construction based materials",
    "10.  Resource, conservation and recycling",
    "11.  Sustainable Environment Management",
    "12. Corrosion Monitoring and Mitigation"
  ];

  return (
    <section className="skills--section" id="mySkills">
      
      <p className="skills--section--description" style={{fontFamily:'sans-serif',fontSize:"17px",boxShadow: "5px 10px 15px 20px rgba(0, 0, 0, 0.1)",padding:"5px",borderRadius:"10px",backgroundColor :"#f5fcff"}}>The <strong> International Workshop on Sustainable Materials and Construction </strong>serves as a platform for researchers,
industry professionals, and practitioners to drive progress in sustainable construction. This event offers an engaging
forum to explore cutting-edge advancements in eco-friendly materials, energy-efficient technologies, and
innovative design approaches. Participants can exchange knowledge, present groundbreaking solutions, and build
collaborations to accelerate the adoption of sustainable practices in the construction industry.
Aligned with the principles of the <strong>United Nations Sustainable Development Goals (SDGs)</strong>, the workshop addresses
critical global challenges, including climate resilience, resource efficiency, sustainable urban development, and
access to clean energy. By fostering dialogue and cooperation, this event aims to advance the creation of a
sustainable and inclusive built environment that balances environmental, social, and economic priorities.</p>
      <div className="skills--section--container">
        {data?.skills?.slice(0, 3).map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              <hr />
            </div>
          </div>
        ))}

        <div className="skills--section--side-by-side" style={{padding:"20px"}}>
          {/* Themes container */}
          <div className="skills--section--themes">
            <h3 className="skills--section--title">Themes</h3>
            <ul className="skills--section--theme-list">
              {themes.map((theme, index) => (
                <div>
                <li key={index} className="skills--section--theme-item">{theme}</li>
                {/* <hr /> */}
                </div>
              ))}
            </ul>
          </div>

          {/* Poster container */}
          <div className="skills--section--poster">
            <h3 className="skills--section--title">Poster Presentation</h3>
            <p className="skills--section--description">
              Participants are invited to showcase their innovative ideas and
              research findings through a Poster Presentation. The format of
              the abstract and poster is available on the workshop webpage.
              During the event, posters will be presented, and the best two
              posters will be awarded certificates of excellence in recognition
              of outstanding contributions. This opportunity allows valuable
              work to be shared and engagement with a vibrant community
              of experts and peers.
            </p>
            <hr />
            <br />
            <br />
            <h2 style={{ color: "red" }}>Registration & Abstract Submission Deadline:
              20th January 2025
            </h2>
            <h3>For abstract submission visit:

            </h3>
            <h3><a href="https://iitjammu.ac.in/post/iwsmc">https://iitjammu.ac.in/post/iwsmc</a></h3>
            
          </div>
        </div>
      </div>
    </section>
  );
}
