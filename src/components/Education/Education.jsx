import React from "react";
import "./Education.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Education = () => {
    return (
        <div className="parentClass">
            <div className="education">
                <section>
                    <div class="text-3xl font-semibold text-blue-700 hover:underline"><a href="https://www.daiict.ac.in/">Dhirubhai Ambani Institute of Information and Communication Technology</a></div>
                    <div style={{ padding: "0.5rem 0rem 0.5rem" }}>
                        <span className="duration"><FaCalendarAlt class="inline-block mr-1" /> June 2022 - May 2024</span>
                        <span class="text-2xl"><FaLocationDot style={{ fontSize: "1.5rem" }} class="inline-block mr-1"/>Gandinagar</span>
                    </div>
                    <div className="degree">
                        <span class="text-2xl font-semibold">M.Sc - Information Technology</span>
                    </div>
                    <br></br>
                    <div class="text-2xl">
                        Postgraduate Course include Data Structure & Algorithms, Object-Oriented Software Engineering, Operating Systems, Database Management Systems, Software Engineering, Design Software System, Enterprise Computing, Web Programming.
                    </div>
                </section>
                <br></br>
                <hr></hr>
                <br></br>
                <section>
                    <div class="text-3xl font-semibold text-blue-700 hover:underline"><a href="https://www.gujaratuniversity.ac.in/">Gujarat University</a></div>
                    <div style={{ padding: "0.5rem 0rem 0.5rem" }}>
                        <span className="duration"><FaCalendarAlt class="inline-block mr-1" /> August 2021 - May 2022</span>
                        <span class="text-2xl"><FaLocationDot style={{ fontSize: "1.5rem" }} class="inline-block mr-1"/>Ahmedabad</span>
                    </div>
                    <div className="degree">
                        <span class="text-2xl font-semibold">M.Sc - Analytical Chemistry (Dropped in mid)</span>
                    </div>
                    <br></br>
                    <div class="text-2xl">
                        Developed Analytical and problem- solving skills as well as apply good laboratory practices necessary for performing various activities in the industry.
                    </div>
                </section>
                <br></br>
                <hr></hr>
                <br></br>
                <section>
                    <div class="text-3xl font-semibold text-blue-700 hover:underline"><a href="https://www.gujaratuniversity.ac.in/">Gujarat University</a></div>
                    <div style={{ padding: "0.5rem 0rem 0.5rem" }}>
                        <span className="duration"><FaCalendarAlt class="inline-block mr-1" /> June 2018 - May 2021</span>
                        <span class="text-2xl"><FaLocationDot style={{ fontSize: "1.5rem" }} class="inline-block mr-1"/>Ahmedabad</span>
                    </div>
                    <div className="degree">
                        <span class="text-2xl font-semibold">B.Sc - Chemistry</span>
                    </div>
                    <br></br>
                    <div class="text-2xl">
                        performed various techniques for the qualitative and quantitative analyses based on instrumental and physico-chemical methods as well as apply the principles of synthetic organic chemistry for organic preparation.
                    </div>
                </section>
                <br></br>
                <hr></hr>
                <br></br>

            </div>
        </div>
    );
}