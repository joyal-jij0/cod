import React from 'react';
import './App.css';
import mait from './assets/mait.webp' ;
import ansh from './assets/anshul.png';
import linked from './assets/linkedin-svgrepo-com.svg';

export default function Header(){
    return(
        <>
            <div className="header">
                <div><img src={mait} alt=""  className="logo"/></div>
                <div className="home">Home</div>
                <div className="">ABOUT</div>
                <div className="">PROJECTS</div>
                <div className="">BLOG</div>
                <a href="https://www.instagram.com/reel/CtmC0DWPidR/?igshid=M2MyMzgzODVlNw=="><button>Join Now</button></a>
            </div>
            <div className="cpd top">ACROSS</div>
            <div className="cpd top">THE  TECH</div>
            <div className="first-banner">
                <div className="top who">WHO ARE WE ?</div>
                <div className="top">
                    We are one and only official <br/>Cross Platform Development Society of MAIT
                </div>
            </div>
            <div className="second-banner">
                <div className="top who"> WHAT WE DO </div>
                <div className="top">
                    Wanna develop Software for every Platform and Viewport? Look no further C.P.D. is here for you. We'll help you build software that work on every device be it Android, Windows, Iphone, Ipad, Mac, Android TV, Google Tv, Apple Tv, Smart Watches & more... <br/> Code Once and Reuse everywhere.
                </div>
            </div>
            <div className="third-banner">
                <div className="top who">MEET OUR TEAM</div>
                <div className="top"><img src={ansh}  className="ansh" alt=""/></div>
                <div className="top who"> Anshul Santoshi</div>
                <div className="top  cc">(Founder)</div>
                <div className="top who cc"> Chief Cross Platform Developer</div>
                <a href="https://www.linkedin.com/in/anshul-santoshi-0b9b99285/"><div className="top "><img src={linked} className="linkedin" alt=""/></div></a>

                <div className="top">Got 50 Cr. package off-campus <br/> Works with Overseas Clients </div>
                <div className="top">Inquisitive, Energetic, skilled in leadership, with a strong foundation in math, logic and cross-platform coding</div>
                <div className="top"> Proficient in HTML, CSS, Javascript, React, Node, Express, Mongo-DB, Solidity, React-Native, Kotlin, Flutter, Electron, Rust, Python</div>
                <div className="top who"> Joyal Jijo</div>
                <div className="top  cc">Rookie</div>
            </div>
            <div className="fourth-banner">
                <div className="top who cc">So what are you waiting for ?</div>
                <div className="top"> <a href="https://www.instagram.com/reel/CtmC0DWPidR/?igshid=M2MyMzgzODVlNw=="><button className="sp">JOIN NOW</button></a></div>
            </div>
            <div className="footer ">Made with ❤️ by Joyal Jijo (but only for mobile)</div>
        </>
    )
}
