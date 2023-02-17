import React from 'react'
import "./about.css"
import Php from "../../assets/login.png";
import {AiFillCode, AiFillDatabase} from 'react-icons/ai'
import {MdWebStories} from 'react-icons/md'
import {CgUserlane} from 'react-icons/cg'
import AboutTimeline from "./AboutTimeline.jsx"

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section_title">
                About Me
            </h2>
            <div className="about_container grid">
                <img src={Php} alt="" className="about_img" />
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">
                            Enthusiastic and hardworking student who is eager to take on the challenges of new technology. With my previous experience in both production and website creation this has given me a strong foundation and diverse skillset which i can anticipate and help navigate the exciting and ever-evolving world of technology.
                        </p>
                        <a href="../../assets/resume.pdf" className="btn" download>DownLoad Resume</a>
                    </div>
                    <div className="about_skills grid">


                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            <AiFillCode/>   Coding Language
                        </h3>
                    </div>
                    <div className="skills_detail">
                        <span className="skill_description">adsfsdfasdf</span>
                    </div>
                </div>

                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            <MdWebStories/>   Web Development
                        </h3>
                    </div>
                    <div className="skills_detail">
                        <span className="skill_description">adfadsfads</span>
                    </div>
                </div>

                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            <AiFillDatabase/>   SQL/NoSQL Database
                        </h3>
                    </div>
                    <div className="skills_detail">
                        <span className="skill_description">adsfadsfasd</span>
                    </div>
                </div>

                <div className="skills_data">
                    <div className="skills_titles">
                        <h3 className="skills_name">
                            <CgUserlane/> UI/UX Design
                        </h3>
                    </div>
                    <div className="skills_detail">
                        <span className="skill_description">adsfadfafdasf</span>
                    </div>
                </div>
            </div>
                </div>
            </div>
            <AboutTimeline/>
        </section>

    )
}

export default About