import React, { Component } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Projects from './components/Projects'
import About from './components/About'
import Profile from './img/profile.jpg'
import Anime from 'react-anime'
import { Container, Row, Col } from 'react-bootstrap'

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
                <img src={Profile} style={styles.profileImage} alt="profile"></img>
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
                    <a href="https://www.linkedin.com/in/sinisa-damjanovic-673053bb/"><FaLinkedin style={styles.iconStyle}/></a>
                    <a href="https://github.com/sikidamjanovic"><FaGithub style={styles.iconStyle}/></a>
                    <MdEmail style={styles.iconStyle}/>
                </div>
            </Anime>
        )
    }

    render(){
        return (
            <Container style={styles.appStyle}>
                <Row style={styles.firstPageStyle}>

                    <Col md={5} style={styles.profileContainer}>
                        {this.renderPhoto()}
                        {this.renderName()}
                    </Col>

                    <Col md={7} style={styles.aboutContainer}>
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
        minHeight: '100vh'
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    aboutContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
    iconStyle: {
        color: '#2c3e50',
        fontSize: 40,
        marginRight: 25,
        opacity: 0.8
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
    profileImage:{
        borderRadius: 7,
        height: '200px',
        marginBottom: 70,
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'
    },
    icons:{
        display:'flex',
        justifyContent: 'center'
    },
    firstPageStyle:{
        minHeight: '100vh'
    },
    secondPageStyle:{
        minHeight: '100vh'
    }
}

export default App;
