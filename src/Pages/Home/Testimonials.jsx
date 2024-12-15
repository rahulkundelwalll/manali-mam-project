import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section>
     <div>
      <h1 style={{paddingTop:"20px",display:"flex",justifyContent:"center"}}>Organizer</h1>
         <div className="horizontal--images8374">
        <img
          src="./img/Screenshot 2024-12-15 140150.png"
          alt="Centre for Strategic and Sustainable Infrastructure"
          style={{height:"80px"}}
        />
        <img
          src="./img/Screenshot 2024-12-15 140201.png"
          alt="Department of Civil Engineering"
          style={{height:"80px"}}
        />
        <img
          src="./img/Screenshot 2024-12-15 140209.png"
          alt="Indian Concrete Institute"
          style={{height:"80px"}}     
        />
      </div>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "30px", fontWeight: "bold",color:"blue" }}>
        14ᵗʰ - 16ᵗʰ February 2025<br />
        Venue: IIT JAMMU
      </p> 
    </div>
    <h1 style={{paddingTop:"20px",display:"flex",justifyContent:"center"}}>About</h1>
    </section>
  );
}
