import React from 'react'
import "./project.css"
import JavaImg from '../../assets/java.png'
import CccImg from '../../assets/c++.png'
import AngularImg from '../../assets/angular.png'
import ReactImg from '../../assets/react.png'
import {AiOutlineLink} from 'react-icons/ai'

const Project = () => {

    return (
        <section className="work container section" id="project">
            <h2 className="section_title">Projects</h2>

            <div className="work_container grid">
                <div className="work_card">
                    <div className="work_thumbnail">
                        <img src={JavaImg} alt="" className="work_img" />
                        <div className="work_mask"></div>
                    </div>
                    <span className="work_category">Java</span>
                    <h3 className="work_title">Country Data Analysis System</h3>
                    <a href="" className="work_button">
                        <AiOutlineLink/>
                    </a>
                </div>
                <div className="work_card">
                    <div className="work_thumbnail">
                        <img src={CccImg} alt="" className="work_img" />
                        <div className="work_mask"></div>
                    </div>
                    <span className="work_category">C++</span>
                    <h3 className="work_title">Data Management System</h3>
                    <a href="" className="work_button">
                        <AiOutlineLink/>
                    </a>
                </div>
                <div className="work_card">
                    <div className="work_thumbnail">
                        <img src={AngularImg} alt="" className="work_img" />
                        <div className="work_mask"></div>
                    </div>
                    <span className="work_category">Angular</span>
                    <h3 className="work_title">Blog Web App</h3>
                    <a href="" className="work_button">
                        <AiOutlineLink/>
                    </a>
                </div>
                <div className="work_card">
                    <div className="work_thumbnail">
                        <img src={ReactImg} alt="" className="work_img" />
                        <div className="work_mask"></div>
                    </div>
                    <span className="work_category">ReactJS</span>
                    <h3 className="work_title">Portfolio Web</h3>
                    <a href="" className="work_button">
                        <AiOutlineLink/>
                    </a>
                </div>
            </div> 
        </section>
    )
}

export default Project