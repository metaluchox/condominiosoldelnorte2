import React from 'react'
import { Accordion,Card,Image } from 'react-bootstrap';
export const NewsScreen = () => {
    return (
        <>
            <Accordion >
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h2>Plan de mejoramiento de servicio de telecomunicación.</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>
                            Muy buenas tardes Jaime.
Dada la conversación telefónica. adjunto  carta recibida del condominio con el plan de mejoramiento de servicio de telecomunicación.
Sin mas que agregar y atento a sus comentarios.
<hr/>
<Image src="../../assets/images/image1.png" fluid />
<hr/>
<Image src="../../assets/images/image2.png" fluid />

                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <h2>Propuesta para arreglo de portón</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <div>
                            Buenos días vecinos (as)
De acuerdo a la problemática del portón vehícular y en consideración de la última reunión del Condominio, la semana pasada nos reunimos con los vecinos Gonzalo Cortes (casa 7) Manuel Caceres (casa 13) y Viterbo Palma (casa 5) para analizar la factibilidad de nuevos diseños para el portón, evidenciando dificultades técnicas (espacio laterales) e inconvenientes presupuestarios, ya que una modificación de tal envergadura significa un costo superior a los $3.000.000.- .
En este contexto y en vista de la emergencia que puede producir el portón, solicitamos al técnico que ha arreglado el portón, que nos acompañará en la reunión, el cual nos indico que solo es necesario arreglar un brazo hidráulico y además nos envió una actualizó de su cotización inicial por un monto de $440.000.- (opción N°1)
En razón de la reunión de la semana pasada y de la visita del técnico, consideramos, como directiva la opción N°1 (cambiar un solo brazo/costo $440.000.-) la más acertada desde el punto de vista de costo-oportunidad. Por lo tanto, solicitamos a ustedes, validar o invalidar la presente propuesta por medio de este mail, con la finalidad de agilizar la reparación y posterior mantención de la estructura metálica del portón (pintado).
Favor, indicar por este medio su respuesta, proporcionando una opción por casa (también señalar el número de casa)
Saludos y que tengan una excelente semana.                                  
                            </div>                                             
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <h2>Aumento Gasto común</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <div>
                                Se decide aumentar el gasto común a $7.500
                            <hr/>
                                <Image src="../../assets/images/IMG-20201026-WA0019.jpg" fluid />
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


            </Accordion>
        </>
    )
}
