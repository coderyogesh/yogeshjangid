import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import img from "../assets/img.png"

class Contact extends Component {
    render() {
        return (
           <div className="contact-body">
             <Grid className="contact-grid">
                 <Cell col={6} >
                <h2>Yogesh Jangid</h2>
                <img src={img}
                    alt="avatar"
                    style={{height:'250px'}}
                    />
                <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Hello ,There<br/><br/> My Name is Yogesh Jangid<br/><br/> I'am a Front End Developer Currently learning MERN Stack</p>
                 </Cell>
                 
                 <Cell col={6} >
                 <div className="contact-list">
                     <h2>Contact Me</h2>
                     <hr/> 
                     <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'40px',fontFamily:'Anton',width:'50%'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                <a href="tel:+917726089162">7726089162</a>
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className="fas fa-envelope-square" aria-hidden="true"/>
                                <a href = "mailto: 27yogeshjangid@gmail.com">27yogeshjangid@gmail.com</a>
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize:'40px',fontFamily:'Anton'}}>
                        <i className="fab fa-instagram" aria-hidden="true"/>
                            <a href="https://www.instagram.com/yogeshhhj_/">@yogeshhhj_</a>
                                </ListItemContent> 
                        </ListItem>
                        </List>
                        </div>
                     </Cell> 
                     
              </Grid>
           </div>
        ) 
    }
}
export default Contact;