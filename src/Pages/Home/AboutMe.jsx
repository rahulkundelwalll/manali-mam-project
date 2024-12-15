import React from "react";
// import "./Speakers.css"; // Add CSS for styling

const speakersData = [
  {
    name: "Prof. Bai Yun",
    designation: "University College London",
    country: "UK",
    image: "path/to/baiyun.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Dr. Bineshian Hoss",
    designation: "Technical Director, Amberg Engineering",
    country: "Australia",
    image: "path/to/bineshian.jpg",
  },
  {
    name: "Er. Mohan Ramesh",
    designation: "Task Force Leader, Mumbai Ahmedabad High Speed Rail, L&T",
    country: "India",
    image: "path/to/mohanramesh.jpg",
  },
  {
    name: "Prof. Praveen Kumar",
    designation: "Indian Institute of Technology",
    country: "Roorkee",
    image: "path/to/baiyun.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Er. Rashmiranjan Mallick",
    designation: "Dy. Chief Engineer, Chenab Bridge",
    country: "Konkan Railways Corporation Ltd.  ",
    image: "path/to/bineshian.jpg",
  },
  {
    name: "Dr. Ren Jun    ",
    designation: "Yunnan University",
    country: "China",
    image: "path/to/mohanramesh.jpg",
  },
  {
    name: "Prof. Sandeep Chaudhary",
    designation: "Indian Institute of Technology",
    country: "Indore",
    image: "path/to/baiyun.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Prof. Shashank Bishnoi",
    designation: "Indian Institute of Technology",
    country: "Delhi",
    image: "path/to/bineshian.jpg",
  },
  {
    name: "Prof. Weihong Li",
    designation: "Dalian University",
    country: "China",
    image: "path/to/mohanramesh.jpg",
  },
  {
    name: "Dr. Ankit Kathuria",
    designation: "Indian Institute of Technology",
    country: "Jammu",
    image: "path/to/baiyun.jpg", // Replace with actual image paths or URLs
  },
  {
    name: "Prof. Anurag Misra",
    designation: "Indian Institute of Technology",
    country: "Jammu",
    image: "path/to/bineshian.jpg",
  },
  {
    name: "Prof. Chong Wang",
    designation: "Chongqing University",
    country: " China",
    image: "path/to/mohanramesh.jpg",
  },  
  {
    name: "Prof. Rongxin Guo",
    designation: "Kunming University of Scienceand Technology",
    country: " China",
    image: "path/to/mohanramesh.jpg",
  }, 
  {
    name: "Prof. Hui Li",
    designation: "Xi’an University of Architecture and Technology",
    country: " China",
    image: "path/to/mohanramesh.jpg",
  }, 
  {
    name: "Prof. Tingyu Hao",
    designation: "Central Research Institute of Building and Construction",
    country: " China",
    image: "path/to/mohanramesh.jpg",
  }, 
  {
    name: "Prof. Jianghong Mao",
    designation: "Sichuan University",
    country: " China",
    image: "path/to/mohanramesh.jpg",
  }, 
  // Add other speakers similarly...
];

const SpeakerCard = ({ name, designation, country, image }) => {
  return (
    <div className="speaker-card">
      <img src={image} alt={name} className="speaker-image" />
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
