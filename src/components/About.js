import React, { Component } from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaAdobe } from 'react-icons/fa'
import Anime from 'react-anime'
import '../css/hover.css'

class About extends Component {

    renderInfo(){
        let animeProps = {
            opacity: [0,1],
            translateY: [-10, 0],
            duration: 5000,
            delay: (el, i) => i * 200
        }
        return(
            <Anime {...animeProps}>
                <h1 style={styles.headerStyle}>
                    I'm a <span style={styles.boldedSpan}> Front-End Developer / Designer </span>
                    <br></br>
                    based in the Toronto area working with the following technologies :
                </h1>
            </Anime>
        )
    }

    renderIcons(){
        let animeProps = {
            opacity: [0,1],
            translateY: [-10, 0],
            duration: 10000,
            delay: (el, i) => i * 200
        }
        return(
            <Anime {...animeProps}>
                <div style={styles.iconsContainer}>

                    <div style={styles.iconContainer}>
                        <FaReact style={styles.icon}/>
                    </div>

                    <div style={styles.iconContainer}>
                        <FaJsSquare style={styles.icon}/>
                    </div>

                    <div style={styles.iconContainer}>
                        <FaHtml5 style={styles.icon}/>
                    </div>

                    <div style={styles.iconContainer}>
                        <FaCss3Alt style={styles.icon}/>
                    </div>

                    <div style={styles.iconContainer}>
                        <FaAdobe style={styles.icon}/>
                    </div>

                </div>
            </Anime>
        )
    }

    renderButtons(){
        let animeProps = {
            opacity: [0,1],
            translateX: [-50, 0],
            duration: 5000
        }
        return(
            <Anime {...animeProps}>
                <div style={styles.buttonsContainer}>
                    <button className="hireButton">
                        <a href="mailto:sikidamjanovic@gmail.com">Hire Me</a>
                    </button>
                    <button className="resumeButton" style={styles.resumeButton}>
                        <a href="../resume.pdf">Resume</a>
                    </button>
                </div>
            </Anime>
        )
    }

    render() { 
        return (
            <div style={styles.aboutContainer}>
                {this.renderInfo()}
                {this.renderIcons()}
                {this.renderButtons()}
            </div>
        );
    }
}
 
const styles = {
    aboutContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '0.8em'
    },
    headerStyle:{
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        color: '#2c3e50',
        textAlign: 'center',
        fontSize: '2.2em',
        lineHeight: '1.5em'
    },
    boldedSpan:{
        color: '#2c3e50',
        fontWeight: 'bold',
        padding: 5,
        textShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'
    },
    iconsContainer:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10
    },
    icon: {
        color: 'gray',
        fontSize: '2.5em',
    },
    iconCaption: {
        textAlign: 'center',
        fontFamily: 'Poppins'
    },
    buttonsContainer: {
        marginTop: 50,
        display: 'flex'
    }
}

export default About;