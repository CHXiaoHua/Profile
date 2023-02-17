import React from 'react'
import "./home.css"
import PImg from "../../assets/photo.jpg";
import Socials from "./Socials";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={PImg} alt="" className="home_img" />
                <h1 className="home_name">Zhaohui Li</h1>
                <span className="home_education">I'm a third-year Computer Science Student in York University</span>
                <Socials/>
            </div>
        </section>
    )
}

export default Home