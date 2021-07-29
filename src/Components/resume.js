import React, { Component } from 'react';
import { Grid,Cell } from 'react-mdl';
import img from "../assets/img.png"
import Education from './education';
import Experience from './Experience';
import Skills from './Skills';
import { Link } from 'react-router-dom';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                  <Cell col={4}>
                      <div style={{textAlign:'center'}}>
                          <Link to="/">
                      <img src={img}
                          alt="avatar"
                          style={{height:'200px'}}
                          />
                          </Link>
                      </div>
            <div className='resume-left'>
                      <h2 style={{paddingTop:'1em'}}>Yogesh Jangid</h2>
                      <h2 style={{color:'#0B65C2',fontSize:'45px'}}>Programmer<br/>Developer</h2>
                      <hr style={{borderTop:'3px solid #833fb2',width:'80%'}}/>
                    <p>Hello I am Yogesh , An self Taught Front-End Developer,Learning React,And MERN STACK.</p>
                    <hr style={{borderTop:'3px solid #833fb2',width:'80%'}}/>
                    
                    <h5>Address</h5>
                    <p>Pali , Rajasthan</p>
                    <hr style={{borderTop:'3px solid #833fb2',width:'27%'}}/>
                    <h5>Phone</h5>
                    <p>7726089162</p>
                    <hr style={{borderTop:'3px solid #833fb2',width:'25%'}}/>
                    <h5>Email</h5>
                    <p>27yogeshjangid@gmail.com</p>
                    <hr style={{borderTop:'3px solid #833fb2',width:'53%'}}/>
                    <h5>Web</h5>
                    <a href="https://coderyogesh.github.io/yogeshjangid">https://coderyogesh.github.io/yogeshjangid</a> 
                    <hr style={{borderTop:'3px solid #833fb2',width:'74%'}}/>
            </div>
                  </Cell>
            
                  <Cell className="resume-right-col" col={8}>
                      <h2>Education</h2>
                      <Education 
                      startYear={2019}
                      endYear={2023}
                      schoolName="MITS,JADAN"
                      schoolDescription="Currently Pursuing B.tech in C.S.E Branch and currently in 3rd Year of My college"
                      />

                        <Education 
                        startYear={2017}
                        endYear={2019}
                        schoolName="St.Paul's Sr. Sec.School,Udaipur"
                        schoolDescription="Completed My High School in Science Stream With Maths"
                        />
                        <hr style={{borderTop:'3px solid #64C8FE'}}/>

                        <h2>Experience</h2>

                        <Experience
                       
                        startYear={'July-2021'}
                        endYear={'Present'}
                        jobName="Campus Ambassador AT Ecell-IIT,Bombay"
                        jobDescription="Campus Ambassador at Ecell,IIT,Bombay"
                        />
                        
                        <Experience
                        startYear={'June-2021'}
                        endYear={'Present'}
                        jobName="Internshala Student Partner 23"
                        jobDescription="Internshala Student Partner 23 at Internshala"
                        />

                        <Experience
                        startYear={'Aug-2020'}
                        endYear={'Jan-2021'}
                        jobName="Internshala Student Partner 19 and 20"
                        jobDescription="Internshala Student Partner 19 and 20 at Internshala"
                        />

                        <Experience
                        startYear={'July-2020'}
                        endYear={'Nov-2020'}
                        jobName="Campus Ambassador AT Ecell-IIT,Bombay"
                        jobDescription="Campus Ambassador at Ecell,IIT,Bombay"
                        />

                        <Experience
                        startYear={'May-2020'}
                        endYear={'Aug-2020'}
                        jobName="Digital Marketing and Wordpress Intern"
                        jobDescription="Did Digital Marketing and Graphic design for The Social Media Posts and Also Did Search Engine Optimization(SEO),and Marketing also worked on wordpress."
                        />

                        <hr style={{borderTop:'3px solid #64C8FE'}}/>
                        <h2>Skills</h2>
                        <Skills
                        skill="HTML"
                        progress={90}
                        />

                        <Skills
                        skill="CSS"
                        progress={80}
                        />

                        <Skills
                        skill="Javascript"
                        progress={70}
                        />

                        <Skills
                        skill="React"
                        progress={50}
                        />

                        <Skills
                        skill="NodeJs"
                        progress={30}
                        />

                  </Cell>
                  
                </Grid>
            </div>
        )
    }
}
export default Resume;