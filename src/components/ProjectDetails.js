import React, { Component } from 'react';
import KinoSplash from '../img/kinosplash.png'
import KinoLogo from '../img/kinoLogo.png'
import ReactrivLogo from '../img/reactrivLogo.png'
import ReactrivSplash from '../img/reactrivsplash.png'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../css/main.css'

class ProjectDetails extends Component {

    constructor(props) {
        super(props)
        this.openDemoLink = this.openDemoLink.bind(this);
        this.openGithubLink = this.openGithubLink.bind(this);
    }

    getBackground(){
        var id = this.props.id
        if(id === 1){
            return <img id="splash" src={KinoSplash} alt=""/>
        }else if (id === 2){
            return <img id="splash" src={ReactrivSplash} alt=""/>
        }else if (id === 3){
            return <img alt=""/>
        }
    }

    getLogo(){
        var id = this.props.id
        if(id === 1){
            return <img id="project-logo" src={KinoLogo} alt=""/>
        }else if (id === 2){
            return <img id="project-logo" src={ReactrivLogo} alt=""/>
        }else if (id === 3){
            // return <img id="project-logo" src={KinoLogo} alt=""/>
        }
    }

    openDemoLink(){
        var demoLink = this.props.demoLink
        var win = window.open(demoLink, '_blank');
        win.focus();
    }

    openGithubLink(){
        var githubLink = this.props.githubLink
        var win = window.open(githubLink, '_blank');
        win.focus();
    }


    render() {
        return (
            <div>

                <Container id="modal-container">

                    <Row>

                        <Col md={6}  style={{ backgroundColor: this.props.backgroundColor}} id="modal-details">

                            <div style={{ color: this.props.textColor}}>
                                {this.getLogo()}
                                <p>{this.props.desc}</p>
                                <p>Built with: {this.props.builtWith}</p>
                            </div>

                            <div>
                                <button 
                                    style={{ border: '4px solid ' + this.props.color, color: this.props.color}}
                                    onClick={this.openDemoLink}
                                >
                                    <FaExternalLinkAlt style={{ color: this.props.color, fontSize: '25px', marginRight: '10px' }}/>DEMO
                                </button>
                                <button 
                                    style={{ border: '4px solid ' + this.props.color, color: this.props.color}}
                                    onClick={this.openGithubLink}
                                >
                                    <FaGithub style={{ color: this.props.color, fontSize: '25px', marginRight: '10px' }}/>CODE
                                </button>
                            </div>

                        </Col>

                        <Col md={6} style={{ backgroundColor: this.props.backgroundColor}} id="modal-img">
                            {this.getBackground()}
                        </Col>

                    </Row>
                </Container>

            </div>
        );
    }
}

export default ProjectDetails;