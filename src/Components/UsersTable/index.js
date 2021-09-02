import React, { useState, useEffect } from 'react'
import { Table, Input } from 'reactstrap'

const UsersTable = props => {
    const [isShown, setIsShown] = useState()
    const { usersList, filterHandler, filterResult } = props
    const toggle = () => {
        setIsShown(!isShown)
    }

    useEffect(() => {
        console.log("yo solo funciono una vez")
    }, [])

    useEffect(() => {
        console.log("yo funciono cada que se togglea la tabla")
    }, [isShown])

    useEffect(() => {
        setIsShown(!isShown)
        console.log("yo funciono siempre")
    }, [])
    return (

        <>
            <button type="button" onClick={toggle}>{isShown ? "Ocultar" : "Mostrar"}</button>
            <Input
                onChange={filterHandler}
            />
            {
                isShown &&
                <Table dark>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersList.map((user, index) => {
                                const { nombre, email } = user
                                return (
                                    <tr key={index}>
                                        <td>{nombre}</td>
                                        <td>{email}</td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </Table>
            }
        </>
    )
}

export default UsersTable