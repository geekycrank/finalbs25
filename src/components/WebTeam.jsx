import React from "react";
import "./WebTeam.css";

import abi from "../assets/abinesh.jpg";
import deva from "../assets/deva.jpg";
import saro from "../assets/saravana.jpg";
import janani from "../assets/janani.jpg";
import mani from "../assets/mani.jpg";
import sanjeev from "../assets/sanjeev.jpg";
import mr from "../assets/maharaja.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WebTeam = () => {
  const teamMembers = [
    { name: "Abinesh", role: "Web Developer", image: abi },
    { name: "Devashree", role: "Web Developer", image: deva },
    { name: "Sharavanavel", role: "UI designer", image: saro },
    { name: "Manikandan", role: "Web Developer", image: mani },
    { name: "Janani", role: "UI designer", image: janani },
    { name: "Sanjeev", role: "Web Developer", image: sanjeev },
    { name: "maharaja", role: "Web Developer", image: mr }
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <div className="webteam-container">
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="transform 1s ease"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} className="team-member-image" />
            </div>
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WebTeam;
