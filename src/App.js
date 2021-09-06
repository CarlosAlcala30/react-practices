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
  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)

  const billHandler = event => {
    const price = event.target.value
    setBill(price)
    setTotalPerPerson( (1+tip)*bill )
    setTipPerPerson( tip*bill )
  }

  const tipHandler = event => {
    const tip = event.target.dataset.tip
    setTip(tip);
    setTotalPerPerson( (1+tip)*bill )
    setTipPerPerson(tip*bill)
  }

  const peopleHandler = event => {
    const value = event.target.value
    setPeople(value);
    setTotalPerPerson( totalPerPerson/value )
    setTipPerPerson( tipPerPerson/value )

  }

  const resetHandler = event => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setTotalPerPerson( 0)
    setTipPerPerson( 0)
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
            <div >
              <p className="">Tip Amount<br/><span>/person</span></p>
              <h2 className=""id="tip-total">${tipPerPerson?Math.round( tipPerPerson *100 )/100 :0}</h2>
            </div> 
            <div className="">
              <p className="">Total<br/><span>/person</span></p>
              <h2 className="" id="total">${totalPerPerson ? Math.round( totalPerPerson *100 ) /100:0}</h2>
            </div>
            <div className="">
              <button type="button" onClick={resetHandler}>RESET</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
