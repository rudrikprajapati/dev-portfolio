import React, { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import { FaInfo, FaBriefcase, FaCode, FaClipboard, FaGraduationCap, FaTrophy, FaEnvelope } from 'react-icons/fa';

export const Header = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <header className="header">
            <nav>
                <div className="navButtons">
                    <button
                        className={activeButton === "about" ? "active" : ""}
                        onClick={() => handleButtonClick("about")}
                    >
                        <Link to="/">
                            <FaInfo /> About
                        </Link>
                    </button>
                    <button
                        className={activeButton === "work" ? "active" : ""}
                        onClick={() => handleButtonClick("work")}
                    >
                        <Link to="/work">
                            <FaBriefcase style={{ fontSize: "1.6rem" }}/> Work Experience
                        </Link>
                    </button>
                    <button
                        className={activeButton === "skills" ? "active" : ""}
                        onClick={() => handleButtonClick("skills")}
                    >
                        <Link to="/skills">
                            <FaCode style={{ fontSize: "2rem" }}/> Skills
                        </Link>
                    </button>
                    <button
                        className={activeButton === "projects" ? "active" : ""}
                        onClick={() => handleButtonClick("projects")}
                    >
                        <Link to="/projects">
                            <FaClipboard /> Projects
                        </Link>
                    </button>
                    <button
                        className={activeButton === "education" ? "active" : ""}
                        onClick={() => handleButtonClick("education")}
                    >
                        <Link to='/education'>
                            <FaGraduationCap style={{ fontSize: "2rem" }}/> Education
                        </Link>
                    </button>
                    <button
                        className={activeButton === "achievement" ? "active" : ""}
                        onClick={() => handleButtonClick("achievement")}
                    >
                        <Link to="/achivement">
                            <FaTrophy /> Achievement
                        </Link>
                    </button>
                    <button
                        className={activeButton === "contact" ? "active" : ""}
                        onClick={() => handleButtonClick("contact")}
                    >
                        <Link to="/contact">
                            <FaEnvelope /> Contact
                        </Link>
                    </button>
                </div>
            </nav>
        </header>
    );
}
