import React, { Component }  from 'react';
import "./App.css"
import {Layout,Header,Navigation,Drawer,Content } from 'react-mdl';  
import Main from './Components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render(){
  return (
      <div className="demo-big-content">
    <Layout >
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'Black'}} to="/landingpage" >Techy Yogi</Link>} scroll>
            <Navigation >
                <Link style={{color:'Black'}} to="/resume">Resume</Link>
                <Link style={{color:'Black'}} to="/aboutme">About Me</Link>
                <Link style={{color:'Black'}} to="/projects">Projects</Link>
                <Link style={{color:'Black'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'Black'}} to="/landingpage">Techy Yogi</Link>} scroll="true">
        
            <Navigation>
                <Link style={{color:'Black'}} to="/resume" >Resume</Link>
                <Link style={{color:'Black'}} to="/aboutme">About Me</Link>
                <Link style={{color:'Black'}} to="/projects">Projects</Link>
                <Link style={{color:'Black'}} to="/contact">Contact</Link>
            </Navigation>
            
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </div>
  );
  }
}

export default App;
