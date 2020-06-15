import React from 'react'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const title = 'Node js'
const description = 'Uma biblioteca javascript muito famosa que esta rodando o mundoe fazendo muito sucesso.'
const url_img = './public/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.png'
const preco = '29.90'



export default props => {
    return (
        <Container>
            <Row>
                <h1 className='mt-5'>Cursos</h1>

            </Row>
            <hr />
            <Row>
                <Col xl='4'>
                    <Card>
                        <CardImg src='https://img2.gratispng.com/20180821/sbr/kisspng-node-js-javascript-website-development-express-js-weekly-2-5b7c78fc10ada7.0867356815348840920683.jpg' />
                        <CardBody>
                            <CardTitle><h2>{title}</h2></CardTitle>
                            <hr/>
                            <CardSubtitle><h4>{preco}</h4></CardSubtitle>
                            <CardText>{description}</CardText>
                            <Button>comprar</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>

    )

}