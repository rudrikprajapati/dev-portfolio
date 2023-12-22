import React from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const Contact = () => {
  return (
    <div className="parentClass">
      <div className="contact">
        <div className="profiles">
          <div>
            <MdEmail class="inline-block text-4xl pb-1" />
            <span class="pl-2 text-2xl">Email</span>
            <div class="text-2xl" style={{ color: "blue" }}><a href="mailto:r.rudrik1026.rp@gamil.com">r.rudrik1026.rp@gamil.com</a></div>
          </div>
          <br></br>
          <div>
            <FaLinkedin class="inline-block text-4xl pb-1" />
            <span class="pl-2 text-2xl">Linkedin</span>
            <div class="text-2xl" style={{ color: "blue" }}><a href="https://www.linkedin.com/in/rudrik-prajapati-0bb70a1b4/">https://www.linkedin.com/in/rudrik-prajapati-0bb70a1b4</a></div>
          </div>
          <br></br>
          <div>
            <FaGithub class="inline-block text-4xl pb-1" />
            <span class="pl-2 text-2xl">Github</span>
            <div class="text-2xl" style={{ color: "blue" }}><a href="https://github.com/rudrikprajapati">https://github.com/rudrikprajapati</a></div>
          </div>
          <br></br>
          <div>
            <FaInstagram class="inline-block text-4xl pb-1" />
            <span class="pl-2 text-2xl">Instagram</span>
            <div class="text-2xl" style={{ color: "blue" }}><a href="https://www.instagram.com/rudrik_prajapati/?hl=en">https://www.instagram.com/rudrik_prajapati</a></div>
          </div>
          <br></br>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}