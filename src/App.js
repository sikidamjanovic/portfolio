import React, { Component } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Projects from './components/Projects'
import About from './components/About'
import Profile from './img/profile.jpg'
import Anime from 'react-anime'
import { Container, Row, Col } from 'react-bootstrap'
import './css/hover.css'

class App extends Component {

    returnPhoto(){
        return <img src={Profile} alt="profile" style={styles.profileImage}/>
    }

    renderPhoto(){
        let animeProps = {
            opacity: [0,1],
            translateY: [-100, 0],
            duration: 2000,
            delay: (el, i) => i * 200
        }
        return(
            <Anime {...animeProps}>
                <img className="profileImg" src={Profile}  alt="profile"></img>
            </Anime>
        )
    }

    renderName(){
        let animeProps = {
            opacity: [0,1],
            translateX: [-100, 0],
            duration: 1500,
            delay: (el, i) => i * 200
        }
        return(
            <Anime {...animeProps}>
                <h1 style={styles.nameStyle}>
                    Sinisa <br></br>Damjanovic.
                </h1>
                <div style={styles.icons}>
                    <a href="https://www.linkedin.com/in/sinisa-damjanovic-673053bb/"><FaLinkedin className="icon"/></a>
                    <a href="https://github.com/sikidamjanovic"><FaGithub className="icon"/></a>
                    <a href="mailto:sikidamjanovicv@gmail.com"><MdEmail className="icon"/></a>
                </div>
            </Anime>
        )
    }

    render(){
        return (
            <Container style={styles.appStyle}>
                <Row style={styles.firstPageStyle}>

                    <Col lg={5} style={styles.profileContainer}>
                        {this.renderPhoto()}
                        {this.renderName()}
                    </Col>

                    <Col lg={7} style={styles.aboutContainer}>
                        <About/>
                    </Col>

                </Row>
                <Row style={styles.secondPageStyle}>
                    <Projects/>
                </Row>
            </Container>
        )
    }
}

const styles = {
    appStyle: {
        minHeight: '100vh',
        maxWidth: '99%',
        padding: 0,
        margin: 0,
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    },
    aboutContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    },
    nameStyle: {
        color: '#2c3e50',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '40pt',
        lineHeight: 1,
        marginBottom: 50,
        padding: 0,
        textAlign: 'center'
    },
    subheaderStyle:{
        fontSize: '16pt',
        fontFamily: 'Open Sans',
        opacity: 0.8,
        margin: '10px 0px 10px 0px'
    },
    contentContainer:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    navContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#2c3e50',
        listStyleType: 'none',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '16pt',
        padding: 0,
        marginTop: '10%',
        marginBottom: '10%'
    },
    linkStyle:{
        marginRight: 30,
        marginLeft: 30
    },
    projectsContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    icons:{
        display:'flex',
        justifyContent: 'center'
    },
    firstPageStyle:{
        minHeight: '100vh',
        padding: 100
    },
    secondPageStyle:{
        minHeight: '100vh',
        padding: 100
    }
}

export default App;
