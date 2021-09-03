import React from 'react';
import './assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../components/assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Alexander Veniaminovich Pushkin</h3>
                        <p>Full Stack developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A young developer from Murmansk, I'm 24.</p>
                    <p>I'm studying to be an information security specialist, I create custom-made websites.</p>
                    <p>I also make music and sell it.</p>
                    <p>Recently I quit a state-owned company to pursue what I love.</p>
                    <p>With the last money I bought equipment for recording and now I am going to start a startup of my computer game.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/profile.php?id=100072429763961"} title={"pvntherawww"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/pvntherawww"}  title={"pvntherawww"}>
                            <Twitter/>
                        </IconButton>
                        {/* <IconButton target={"_blank"} href={"https://www.linkedin.com/in/vishalsingh-/"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton> */}
                        {/* <IconButton target={"_blank"} href={"https://www.instagram.com/vishalsingh023/"}  title={""}>
                            <Instagram/>
                        </IconButton> */}
                        
                            
                       
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;