import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import img from "../assets/img.png"
import { Link } from 'react-router-dom';

class AboutMe extends Component {
    render() {
        return (
            <div className="contact-body">
             <Grid className="contact-grid">
                 <Cell col={12} >
                <h2>Yogesh Jangid</h2>
                <Link to="/">
                <img src={img}
                    alt="avatar"
                    style={{height:'250px'}}
                    />
                    </Link>
                <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Hello ,There<br/><br/> My Name is Yogesh Jangid<br/><br/> I'am a Front End Developer , currently learning MERN Stack</p>
                 </Cell>
                </Grid> 
              </div>  
        )
    }
}
export default AboutMe;