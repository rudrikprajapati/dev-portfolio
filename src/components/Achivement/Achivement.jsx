import React from "react";
import "./Achivement.css";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export const Achivement = () => {
    return (
        <div className="parentClass">
        <div className="achivement">
            <div className="title">
                <div className="year" style={{fontSize: "1.875rem", lineHeight: "2.25rem"}}>Year</div>
                <div className="desc" style={{fontSize: "1.875rem", lineHeight: "2.25rem"}}>Description</div>
            </div>
            <div className="content">
                <div className="year">2023</div>
                <div className="desc">Max Rating 1059 on Codeforces</div>
            </div>
            <div className="content">
                <div className="year">2023</div>
                <div className="desc">Certified for  <a href="https://drive.google.com/file/d/1ekJjYFZ2Ojqt14dZ1cjDTbu6xeGDqH7v/view?usp=sharing" style={{color:"blue"}}>Problem Solving(Intermediate)</a> By Hackerrank</div>
            </div>
            <div className="content">
                <div className="year">2022</div>
                <div className="desc"><span style={{fontWeight:"600"}}>Top 7.5 %</span> in <a href="https://drive.google.com/file/d/1pt0EC9WJRVF1nU80Vykx_dhq8bdfkWQ-/view?usp=sharing" style={{color:"blue"}}>Google Kickstart Round D</a></div>
            </div>
            <div className="content">
                <div className="year">2022</div>
                <div className="desc">3-Star(1679) on CodeChef</div>
            </div>
            <div className="content">
                <div className="year">2022</div>
                <div className="desc">Global Rank: 654 in Codechef Starters 73 Division 2</div>
            </div>
            <hr></hr>
            <br></br>
            <br></br>
            <div className="profiles">
                <div class="text-3xl "> <FaCode class="inline-block text-4xl pb-1"/><span class="text-purple-600 pl-5 font-semibold">Coding Profiles</span></div>
                <br></br>
                <div>
                    <SiLeetcode class="inline-block text-4xl pb-1" /> 
                    <span class="pl-2 text-2xl">LeetCode</span>
                    <div class="text-2xl" style={{color:"blue"}}><a href="https://leetcode.com/Rudrik_Prajapati">https://leetcode.com/Rudrik_Prajapati</a></div>
                </div>
                <br></br>
                <div>
                    <SiCodeforces class="inline-block text-4xl pb-1" /> 
                    <span class="pl-2 text-2xl">Codeforces</span>
                    <div class="text-2xl" style={{color:"blue"}}><a href="https://codeforces.com/profile/Rudrik">https://codeforces.com/profile/Rudrik</a></div>
                </div>
                <br></br>
                <div>
                    <FaGithub class="inline-block text-4xl pb-1" /> 
                    <span class="pl-2 text-2xl">Github</span>
                    <div class="text-2xl" style={{color:"blue"}}><a href="https://github.com/rudrikprajapati">https://github.com/rudrikprajapati</a></div>
                </div>
            </div> 
            </div>     
        </div>
    );
}