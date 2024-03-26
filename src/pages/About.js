import React from "react";

import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <sction className="section flex overflow-y-auto">
      <div className="container mx-auto h-full relative pt-32">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 ">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden ">
            <img src={WomanImg} alt="" />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </p>

            <Link to="/portfolio" className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </sction>
  );
};

export default About;
