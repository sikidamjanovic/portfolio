import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Projects extends Component {
    render(){
        return(

            <Container style={styles.projectsContainer}>
                <Row>

                    <Col md={5} style={styles.boxStyle}>
                    </Col>

                    <Col md={5} style={styles.boxStyle}>
                    </Col>

                    <Col md={5} style={styles.boxStyle}>
                    </Col>

                    <Col md={5} style={styles.boxStyle}>
                    </Col>

                </Row>
            </Container>
        )
    }
}

const styles = {
    projectsContainer: {
        height: '100%',
        width: '100%'
    },
    boxStyle: {
        backgroundColor: 'red',
        margin: '10px',
        height: '50vh'
    } 
}

export default Projects