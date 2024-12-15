import React from "react";
// import "./Speakers.css"; // Add CSS for styling

const speakersData = [
  {
    name: "Prof. Bai Yun",
    designation: "University College London",
    country: "UK",
    image: "./img/1.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Dr. Bineshian Hoss",
    designation: "Technical Director, Amberg Engineering",
    country: "Australia",
    image:  "./img/2.jpg",
  },
  {
    name: "Er. Mohan Ramesh",
    designation: "Task Force Leader, Mumbai Ahmedabad High Speed Rail, L&T",
    country: "India",
    image:  "./img/3.jpg",
  },
  {
    name: "Prof. Praveen Kumar ",
    designation: "Indian Institute of Technology",
    country: "Roorkee",
    image:  "./img/4.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Er. Rashmiranjan Mallick",
    designation: "Dy. Chief Engineer, Chenab Bridge",
    country: "Konkan Railways Corporation Ltd.  ",
    image:  "./img/5.jpg",
  },
  {
    name: "Dr. Ren Jun    ",
    designation: "Yunnan University",
    country: "China",
    image:  "./img/6.jpg",
  },
  {
    name: "Prof. Sandeep Chaudhary",
    designation: "Indian Institute of Technology",
    country: "Indore",
    image:  "./img/7.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Prof. Shashank Bishnoi",
    designation: "Indian Institute of Technology",
    country: "Delhi",
    image:  "./img/8.jpg",
  },
  {
    name: "Prof. Weihong Li",
    designation: "Dalian University",
    country: "China",
    image:  "./img/9.jpg",
  },
  {
    name: "Dr. Ankit Kathuria",
    designation: "Indian Institute of Technology",
    country: "Jammu",
    image:  "./img/10.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Prof. Anurag Misra",
    designation: "Indian Institute of Technology",
    country: "Jammu",
    image:  "./img/11.jpg",
  },
  {
    name: "Prof. Chong Wang",
    designation: "Chongqing University",
    country: " China",
   
  },  
  {
    name: "Prof. Rongxin Guo",
    designation: "Kunming University of Scienceand Technology",
    country: " China",
   
  }, 
  {
    name: "Prof. Hui Li",
    designation: "Xi’an University of Architecture and Technology",
    country: " China",
    
  }, 
  {
    name: "Prof. Tingyu Hao",
    designation: "Central Research Institute of Building and Construction",
    country: " China",
   
  }, 
  {
    name: "Prof. Jianghong Mao",
    designation: "Sichuan University",
    country: " China",
   
  }, 
  // Add other speakers similarly...
];

const SpeakerCard = ({ name, designation, country, image }) => {
  return (
    <div className="speaker-card">
      {image &&<img src={image} alt={name} className="speaker-image" />}
      <h3 className="speaker-name">{name}</h3>
      <p className="speaker-designation">{designation}</p>
      <p className="speaker-country">{country}</p>
    </div>
  );
};

const Speakers = () => {
  return (
    <div className="speakers-section" style={{background:"#f5fcff"}}>
      <h2 className="section-title">Invited Speakers</h2>
      <div className="speakers-grid">
        {speakersData.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
