import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
export const InicioScreen = () => {

const urlFile ="https://drive.google.com/drive/folders/18j8Vo1qSHeT3okLbddRPyxgdn0o7C7TM?usp=sharing";

    return (
        <div>
            <Container>
                <Row>
                    <Col sm>

                        <Card border="primary" >
                            <Card.Header> Técnico en citofonos </Card.Header>
                            <Card.Body>
                                <Card.Text>
                              
<p class="card-text">Jonathan Osses +56982278389</p>
<p class="card-text">Juan Pablo Aguilera AFFACCES +56968487957</p>                                    
                                    
      </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />

                    </Col>
                    <Col sm>
                        <Card border="primary" >
                            <Card.Header>Cambio correo</Card.Header>
                            <Card.Body>
                                <Card.Text>
Favor cambiar en su cuentas de transferencias el correo a
pagos@condominiosoldelnorte2.cl
Lo ideal es solo agregar el numero de casa y el mes ( o año ) que están pagando.
Ejemplos: 
- Casa 6 mes N 5
- Casa 6 mes mayo
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />

                    </Col>
                    <Col sm>
                        <Card border="primary" >
                            <Card.Header>Carpetas y archivos</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <a href={urlFile} >
                                        Presione aquí
                                    </a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <br />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
