import React from "react";

import { ImTwitter, ImYoutube, ImInstagram, ImFacebook } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="#">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
