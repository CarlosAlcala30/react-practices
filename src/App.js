import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'
import UsersForm from './Components/UsersForm'

import UsersTable from './Components/UsersTable'

const App = () => {
  const [users, setUsers] = useState()
  const [userData, setUserData] = useState({})
  const [filterResult, setFilterResult ] = useState([])

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

  return (
    <>
      <Container>
        <Row>
          <Col xs="12" md="3">
            <UsersForm 
              userHandler = { userHandler }
              saveUser = { saveUser }
            />
          </Col>
          <Col xs="12" md="9">
            {users && 
              <UsersTable 
                usersList={ filterResult.length ? filterResult : users } 
                filterHandler = { filterHandler }
              />
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App