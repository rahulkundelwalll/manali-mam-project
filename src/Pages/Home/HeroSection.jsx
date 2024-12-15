export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div>
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span>
              <span style={{ display: "block", textAlign: "center", margin: "10px 0" , }}>INTERNATIONAL WORKSHOP </span>
              <span style={{ display: "block", textAlign: "center", margin: "10px 0" , color:"blue"}}>ON</span>
              <span style={{ display: "block", textAlign: "center", margin: "10px 0" }}>SUSTAINABLE MATERIALS</span>
              <span style={{ display: "block", textAlign: "center", margin: "10px 0",color:"blue" }}>AND</span>
              <span style={{ display: "block", textAlign: "center", margin: "10px 0" }}>CONSTRUCTION</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/pexels-pixabay-220762.jpg" alt="Hero Section" />
      </div>
      <div className="horizontal--images">
        <img
          src="./img/Screenshot 2024-12-15 140150.png"
          alt="Centre for Strategic and Sustainable Infrastructure"
        />
        <img
          src="./img/Screenshot 2024-12-15 140201.png"
          alt="Department of Civil Engineering"
        />
        <img
          src="./img/Screenshot 2024-12-15 140209.png"
          alt="Indian Concrete Institute"
        />
      </div>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "18px", fontWeight: "bold",color:"blue" }}>
        14ᵗʰ - 16ᵗʰ February 2025<br />
        Venue: IIT JAMMU
      </p>
    </section>
  );
}
