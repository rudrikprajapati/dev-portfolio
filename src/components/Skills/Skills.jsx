import React from 'react';
import "./Skills.css";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { FaSquareGit } from "react-icons/fa6";
import { SiIntellijidea } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiSublimetext } from "react-icons/si";
import { RxNotionLogo } from "react-icons/rx";


export const Skills = () => {
  return (
    <div className="parentClass">
      <div className="skills">
        <div class="text-3xl font-semibold text-purple-600 mb-1">Core Skills</div>
        <div class="text-3xl">Data Structures & Algorithms, Object-Oriented Programming, Database Management</div>
        <br></br>
        <hr></hr>

        <div class="text-3xl font-semibold text-purple-600 mb-2">Programming Languages</div>
        <div class="text-3xl">
          <span class="font-semibold">C, </span>
          <span><SiCplusplus class="inline-block text-4xl pb-1 mr-2" />C++, </span>
          <span><FaJava class="inline-block text-4xl pb-1 mr-2" />Java</span>
        </div>

        {/* <div class="text-3xl">C, C++, Java</div> */}
        <br></br>
        <hr></hr>

        <div class="text-3xl font-semibold text-purple-600 mb-1">Web Development (Basic)</div>
        <div class="text-3xl">
          <span><FaReact class="inline-block text-4xl pb-1 mr-2" />React.js, </span>
          <span><SiJavascript class="inline-block text-3xl pb-1 mr-2" />Javascript / Node.js, </span>
          <span><SiTailwindcss class="inline-block text-4xl pb-1 mr-2" />Tailwind CSS</span></div>
        <br></br>
        <hr></hr>

        <div class="text-3xl font-semibold text-purple-600 mb-1">Databases</div>
        <div class="text-3xl">
          <span><SiMongodb class="inline-block text-3xl pb-1 mr-2" />MongoDB, </span>
          <span><BiLogoPostgresql class="inline-block text-4xl pb-1 mr-2" />PostgreSQL (Basic),</span>
          <span><TbBrandMysql class="inline-block text-4xl pb-1 mr-2" />MySQL (Basic), </span>
        </div>
        <br></br>
        <hr></hr>

        <div class="text-3xl font-semibold text-purple-600 mb-1">Tools</div>
        <div class="text-3xl">
          <span><FaSquareGit class="inline-block text-4xl pb-1 mr-2" />Git, </span>
          <span><SiIntellijidea class="inline-block text-3xl pb-1 mr-2" />IntelliJ, </span>
          <span><TbBrandVscode class="inline-block text-4xl pb-1 mr-2" />Visual Studio Code, </span>
          <span><SiSublimetext class="inline-block text-3xl pb-1 mr-2" />Sublime Text, </span>
          <span><RxNotionLogo class="inline-block text-4xl pb-1 mr-2" />Notion, </span>
        </div>
        <br></br>
        <hr></hr>
      </div>
    </div>
  );
}