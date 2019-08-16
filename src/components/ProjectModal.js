import React, { Component } from 'react';
import Modal from 'react-modal'
import ProjectDetails from '../components/ProjectDetails'
import '../css/main.css'
// import { Container, Row, Col } from 'react-bootstrap'
  
Modal.setAppElement('#root')

class ProjectModal extends Component {

    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        return this.props.isOpen
    }

    getDetails(){
        var id = this.props.id
        if(id === 1){
            return(
                <ProjectDetails 
                    id={this.props.id}
                    desc="A movie database website that combines great UI 
                          and fast searches for users who are expecting visually 
                          appealing content. "
                    githubLink="https://github.com/sikidamjanovic/react-movie-database"
                    builtWith="React + Bootstrap + tMDB API"
                    demoLink="https://kino-movie.herokuapp.com"
                    backgroundColor="#191e26"
                    textColor="white"
                    color="#83F5A8"
                />
            )
        }
        else if(id === 2){
            return(
                <ProjectDetails 
                    id={this.props.id}
                    desc="A small trivia game where players answer 10 random questions from several categories. Try and get 10/10! "
                    builtWith="React + Bootstrap + openTDB API"
                    textColor="black"
                    githubLink="https://github.com/sikidamjanovic/reactriv"
                    demoLink="https://reactriv.herokuapp.com"
                    color="#C6426E"
                />
            )
        }
        else if(id === 3){
            return(
                <ProjectDetails 
                    id={this.props.id}
                    name="kino"
                    desc="its great"
                    githubURL="wwww.github.com"
                    demoURL="www.kino.com"
                />
            )
        }
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick={false}
                    id="modal"
                >
                    
                <div>
                    <button id="modal-close-button" onClick={this.closeModal}>X</button>    
                    {this.getDetails()}                
                </div>    

                </Modal>
            </div>
        );
    }

  }

export default ProjectModal