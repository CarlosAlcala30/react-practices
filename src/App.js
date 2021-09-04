import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Table,
  Button,
} from 'reactstrap'

//import UsersForm from './Components/UsersForm'

//import UsersTable from './Components/UsersTable'

import data from './mockData/index'

const App = () => {
  const [users, setUsers] = useState()
  const [userData, setUserData] = useState({})
  const [filterResult, setFilterResult ] = useState([])
  const [listProducts, setListProducts ] = useState(data.products)
  const [buyList, setBuyList ] = useState([])
  const [total, setTotal ] = useState(0)

  const userHandler = event => {
    const property = event.target.name
    const value = event.target.value
    setUserData({ ...userData, [property]: value })
    console.log(userData)
  }

  const saveUser = () => {
    !users ? setUsers([userData]) : setUsers([...users, userData])
  }

  const filterHandler = event => {
    const data = users
    const value = event.target.value

    const result = data.filter( user => user.nombre.toLowerCase().includes( value.toLowerCase()))
    setFilterResult( result )
  }

  const addHandler = (event) => {
    const index = event.target.dataset.index 
    const price =  listProducts[index].price
    setBuyList([...buyList,listProducts[index]])       
    setTotal(total+price)
  }

  const removeHandler = (event) => {
    const index = event.target.dataset.index 
    const price =  buyList[index].price
    buyList.splice( index,1 )
    setBuyList(buyList)
    setTotal(total-price)
  }


  return (
    <>
      <Container>
        <Row>
          <Col md="6">
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  listProducts.map( (product,index) => {
                    const {name, price, description} = product
                    return (
                      <tr key={index}>
                        <td >{index}</td>
                        <td >{name}</td>
                        <td>{price}</td>
                        <td>{description}</td>
                        <td><Button color="success" size="md" active  data-index={index} onClick={addHandler}>ADD</Button></td>
                      </tr>
                    )
                  })
                }          
               
              </tbody>
            </Table>
          </Col>
          <Col md="6">
          <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  buyList.map((product,index) => {
                    const {name, price, description} = product
                    return (
                      <tr key={index}>
                        <td >{index}</td>
                        <td >{name}</td>
                        <td>{price}</td>
                        <td>{description}</td>
                        <td><Button color="danger" size="md" active  data-index={index} onClick={removeHandler}>REMOVE</Button></td>                        
                      </tr>
                    )
                  })
                }           
               
              </tbody>
            </Table>
            <h1>Total: {total}</h1>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App