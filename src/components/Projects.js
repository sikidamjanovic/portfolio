import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import project1 from '../img/project1.png'
import project2 from '../img/project3.png'
import project3 from '../img/project2.png'

class Projects extends Component {

    render(){
        return(
            <Container style={styles.projectsContainer}>

                <h1 style={styles.headerText}>Projects</h1>

                <Row>

                    <Col md={4} onClick={this.showModal} style={styles.boxStyle}>
                        <ProjectCard 
                            img = {project1} 
                            id={1}
                        />
                    </Col>

                    <Col md={4} onClick={this.showModal} style={styles.boxStyle}>
                        <ProjectCard 
                            img = {project2}
                            id={2}
                        />
                    </Col>

                    <Col md={4} onClick={this.showModal} style={styles.boxStyle}>
                        <ProjectCard 
                            img = {project3}
                            id={3}
                        />
                    </Col>

                </Row>

            </Container>
        )
    }
}

const styles = {
    projectsContainer: {
        height: '100%',
        maxWidth: '100%',
        margin: 0,
        padding: 0
    },
    boxStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
    },
    headerText: {
        fontFamily: 'Poppins',
        fontWeight: 'Bold',
        textAlign: 'center',
        fontSize: '2em',
        marginBottom: '5%'
    }
}

export default Projects