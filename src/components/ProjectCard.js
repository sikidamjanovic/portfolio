import React, { Component } from 'react';
import ProjectModal from './ProjectModal'

class ProjectCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        this.setState(prevState=>({ 
            showModal: !prevState.showModal 
        }))
    }

    render() {
        return (
            <div style={styles.project} className="project" onClick={this.showModal}>
                <ProjectModal isOpen={this.state.showModal} id={this.props.id}/>
                <div>
                    <img src={this.props.img} style={styles.projectImg} alt="project"></img>
                </div>
            </div>
        );
    }
}

const styles = {
    project:{
        height: '100%',
        width: '90%',
        backgroundColor: '#fafafa',
        padding: 0,
        margin: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5
    },
    projectImg:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        marginBottom: 50,
        borderRadius: 5
    }
}

export default ProjectCard;