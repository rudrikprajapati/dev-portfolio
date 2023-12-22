import React from "react";
import "./Project.css";
import { DiGithubBadge } from "react-icons/di";

export const Project = () => {
    return (
        // <div className="parentClass">
            <div className="projects">
                <section>
                    <div class="text-3xl font-semibold text-purple-700">ContestNexus <span class="font-normal text-black text-2xl"> - July. 2023</span></div>
                    <div style={{ padding: "0.5rem 0rem 0.5rem" }}>
                        <span className="tech">Reactjs</span>
                        <span className="tech">Expressjs</span>
                        <span className="tech">MongoDB</span>
                    </div>
                    <ul className="detail">
                        <li>A competitive programming portal.</li>
                        <li>ContestNexus contains a compiler for some of the languages, discussion forum, profile analytics, upcoming contests list of various coding platforms.</li>
                        <li>Designed and implemented front-end in React for upcoming contests, discussion forums, and used google charts for profile analytics.</li>
                        <li>Designed REST api in Express.js for communication between front-end and backend.</li>
                        <li>Configured MongoDB as a database for discussion forums.</li>
                        <li><span class="text-blue-700"><a href="https://github.com/rudrikprajapati/ContestNexus">Source Code</a><DiGithubBadge class="inline-block text-4xl pb-1" /></span></li>
                    </ul>
                </section>
                <br></br>
                <hr></hr>
                <br></br>
                <section>
                    <div class="text-3xl font-semibold text-purple-700">QuizMaster <span class="font-normal text-black text-2xl"> - December. 2022</span></div>
                    <div style={{ padding: "0.5rem 0rem 0.5rem" }}>
                        <span className="tech">OOPs</span>
                        <span className="tech">C++</span>
                    </div>
                    <ul className="detail">
                        <li>QuizMaster is a multiple-choice question game that offers players the opportunity to win prize money by leveraging
                            lifelines such as audience poll, 50:50, experts advice, etc .
                        </li>
                        <li>Used Concepts: Abstraction, Inheritance, Method overriding and overloading, Operator overloading, Exception handling,
                            keywords like this, static, virtual, etc... using C++.</li>
                        <li><span class="text-blue-700"><a href="https://github.com/rudrikprajapati/Quiz-app">Source Code</a><DiGithubBadge class="inline-block text-4xl pb-1" /></span></li>
                    </ul>
                </section>
                <br></br>
                <hr></hr>
                <br></br>
                <section>
                    <div class="text-3xl font-semibold text-purple-700">Food-Funday <span class="font-normal text-black text-2xl"> - December. 2023</span></div>
                    <div style={{ padding: "0.5rem 0rem 0.5rem" }}>
                        <span className="tech">Reactjs</span>
                        <span className="tech">Expressjs</span>
                        <span className="tech">MongoDB</span>
                        <span className="tech">JWT</span>
                    </div>
                    <ul className="detail">
                        <li>Developed platform enabling users to reserve tables and order food while admins gain access to user data, menu
                            management, food management, and table booking administration.
                        </li>
                        <li>Node.js + Express.js for RESTful services, MongoDB for the database, JWT for authentication, Bcrypt
                            for encryption, React.js for frontend.
                        </li>
                        <li><span class="text-blue-700"><a href="https://github.com/rudrikprajapati/Food-Funday">Source Code</a><DiGithubBadge class="inline-block text-4xl pb-1" /></span></li>
                    </ul>
                </section>
                <br></br>
                <hr></hr>
                <br></br>
            </div>
        // </div>
    );
}