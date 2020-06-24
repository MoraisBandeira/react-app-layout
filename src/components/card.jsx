import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Data from '../data.json';
import dataController from '../dataController'

const data = Data;
export default (props) => {
  const {
    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (

    <Container>
      <Row className=''>
        <Col className="col-11">
          <h1>Cursos</h1>
        </Col>
        <Col>
          <a className='btn btn-outline-primary mt-3' onClick={toggle}>ADD</a>
        </Col>
      </Row>
      <hr />
      <Row>
        {data.map(data => {
          return (
            <Col sm="3" key={data.id}>
              <Card>
                <CardImg src={data.img} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{data.title}</CardTitle>
                  <hr />
                  <CardSubtitle>Likes: {data.likes}</CardSubtitle>
                  <CardText><p>R$: {data.valor}</p></CardText>
                  <Button outline>Comprar</Button>
                </CardBody>
              </Card>
            </Col>
          )
        })}

      </Row>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>CADASTRAR</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleText">Id:</Label>
              <Input type="textarea" name="id" />
              <Label for="exampleText">image-link:</Label>
              <Input type="textarea" name="img" />
              <Label for="exampleText">Title:</Label>
              <Input type="textarea" name="title" />
              <Label for="exampleText">Descrição:</Label>
              <Input type="textarea" name="descricao" />
              <Label for="exampleText">Valor:</Label>
              <Input type="textarea" name="valor" />
          </FormGroup>
          <Button onClick={toggle}>Submit</Button>
          </Form>


        </ModalBody>
      </Modal>
    </Container>
  )

}

