import React from 'react'
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap'

const UsersForm = props => {
    const { userHandler, saveUser } = props
    return (
        <Form className="bg-dark text-white p-3 border rounded">
            <FormGroup>
                <Label>Nombre:</Label>
                <Input name="nombre" onChange={userHandler} />
            </FormGroup>
            <FormGroup>
                <Label>Correo:</Label>
                <Input name="email" onChange={userHandler} />
            </FormGroup>
            <Button type="button" className="mt-3" onClick={saveUser}>save</Button>
        </Form>
    )
}

export default UsersForm