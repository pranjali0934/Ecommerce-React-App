import React from "react";
import Banner from "../assets/banner.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Artivities, where vintage charm meets timeless memories. At Artivities, we specialize in curating a collection of vintage frames, scrapbooks, and customizable memorabilia that help preserve your most cherished moments in style. Our passion lies in blending the nostalgia of yesteryears with the modern need to immortalize precious memories. Whether you're seeking a unique frame to showcase a treasured photograph or a personalized scrapbook to capture life's special milestones, Artivities is your destination for quality craftsmanship and heartfelt keepsakes. Join us on a journey to preserve the past and create lasting memories for generations to come.
        </p>
      </div>
    </div>
  );
}

export default About;
