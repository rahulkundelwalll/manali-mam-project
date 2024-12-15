export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div>
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span>
              <span style={{ display: "block", textAlign: "center",  }}>INTERNATIONAL WORKSHOP </span>
              <span style={{ display: "block", textAlign: "center", color:"blue"}}>ON</span>
              <span style={{ display: "block", textAlign: "center",  }}>SUSTAINABLE MATERIALS</span>
              <span style={{ display: "block", textAlign: "center",color:"blue" }}>AND</span>
              <span style={{ display: "block", textAlign: "center" }}>CONSTRUCTION</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="hero--section--img"  >
        <img src="./img/pexels-pixabay-220762.jpg" alt="Hero Section" />
      </div>
      
      
    </section>
  );
}
