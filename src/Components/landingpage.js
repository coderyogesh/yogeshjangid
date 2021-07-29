import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import img from "../assets/img.png"
class Landing extends Component {
    render() {
        return (
            <div style ={{width: '100%',margin:'auto'}}>
            <Grid className='Landing-grid'>
                <Cell col={12}>
                    <img src={img}
                    alt="avatar"
                    className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Front-End Web Developer</h1>
                        <hr />
                    <p>HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACTJS | NODEJS </p>
                    <div className="social-links">
                        {/* LinkedIn */}
                        
                        <a href="https://www.linkedin.com/in/yogesh-jangid-054599140/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin"  />
                        </a>
                         {/* github */}
                        
                         <a href="https://www.github.com/coderyogesh" rel="noopener noreferrer" target="_blank">
                         <i className="fab fa-github-square" />
                        </a>
                         {/* Insatgram */}
                        
                         <a href="https://www.instagram.com/yogeshhhj_/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-instagram-square"/>
                        </a>
                    </div>
                    </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}
export default Landing;