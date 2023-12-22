import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div className='parentClass'>
            <div className="about">
                <section className="intro mb-8">
                    <h1 class="text-6xl">
                        Hi 👋, I'm
                        <span class="font-semibold"> Rudrik Prajapati!</span>
                    </h1>
                    <div class="text-purple-600 text-3xl font-semibold">Software Engineer Intern</div>
                </section>
                <section class="text-4xl">
                    <ul className='about-detail'>
                        <li>I'm <span class="font-semibold">Sofware Engineer Intern</span> at <span class="text-blue-600"><a href='https://www.bigcircle.tech/'>BigCircle</a></span>.</li>
                        <li>My technical skills include expertise in <span class="font-semibold">C++</span>, C, Java, Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management (MongoDB, SQL) , JavaScript / Node.js (Basic) and Git. I am a person who believes in continuous learning.</li>
                        <li>I completed a M.Sc in <span class="font-semibold">Information Technology</span> from <span class="text-blue-600"><a href='https://www.daiict.ac.in/'>Dhirubhai Ambani Institute of Information and Communication Technology</a></span> (DA-IICT, 2022 - 2024). I have a basic knowledge of web development, created projects based on the MERN Stack and Javascript during my college career.</li>
                        <li>In my free time, I enjoy ❤️ problem-solving (DSA), listening to music 🎵 and playing ♞ chess.</li>
                        <li>I keep things simple and 💻 technology attracts me a lot.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};
