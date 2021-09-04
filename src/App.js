import React, { useState, useEffect } from 'react'

import "./App.scss"

import {
  Container,
  Row,
  Col,
  Button,
  Label,
  Input,
  Form,
  FormGroup,
  
} from 'reactstrap'



const App = () => {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)

  const billHandler = event => {
    const price = event.target.value
    setBill(price)
  }

  const tipHandler = event => {
    const tip = event.target.dataset.tip
    setTip(tip);
  }

  const peopleHandler = event => {
    const value = event.target.value
    setPeople(value);
  }

  const resetHandler = event => {
    setBill(0);
    setTip(0);
    setPeople(0);
  }



  return (
    <>
      <Container fluid className="bg-container d-flex flex-column align-items-center"> 
        <div class="cal-title"><h1>SPLI<br/>TTER</h1></div>
        <Row className="cal-container">
          <Col md="6" className="">            
          <Form>
            <FormGroup>
              <Label for="bill-input">Bill</Label>
              <Input type="number" class="text-right" name="bill" id="bill-input" placeholder="$" onChange={billHandler} value={bill}/>
            </FormGroup>
            <FormGroup>
              <Label>Select tip %</Label>
              <Button type="button"  data-tip=".05" onClick={tipHandler}>5%</Button>
              <Button type="button"  data-tip=".10" onClick={tipHandler}>10%</Button>
              <Button type="button" data-tip=".15" onClick={tipHandler}>15%</Button>
              <Button type="button"  data-tip=".25" onClick={tipHandler}>25%</Button>
              <Button type="button"  data-tip=".50" onClick={tipHandler}>50%</Button>
              <Input type="number" min="0" placeholder="CUSTOM"/>
            </FormGroup>
            <FormGroup>
              <Label for="people-input">Number of People</Label>
              
              <Input type="number" class="text-right" name="people" id="people-input" placeholder="&#61442;" onChange={peopleHandler} value={people} />
            </FormGroup>
          </Form>
          </Col>
          <Col md="6" className="print-total">
            <div className="d-flex justify-content-between">
              <p className="col-6">Tip Amount<br/><span>/person</span></p>
              <h2 className="col-6"id="tip-total">${bill?((bill*tip)/people):0}</h2>
            </div> 
            <div className="d-flex">
              <p className="col-6">Total<br/><span>/person</span></p>
              <h2 className="col-6" id="total">${bill?((bill*(tip+1))/people):0}</h2>
            </div>
            <div className="d-flex justify-content-center">
              <Button type="input" size="lg" onClick={resetHandler}>RESET</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App