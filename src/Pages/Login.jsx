import React, {useState}from 'react'
import {Form, Button, Image} from 'react-bootstrap'
import { logIn } from '../API services (fetch functions)/authServices'

export default function login()  {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitForm = function (e) {
        e.preventDefault();
        logIn(username, password)

    }

        return (
            <div className="d-flex align-items-center justify-content-center min-vh-100">

                <form>
                    <h1 className=" header mb-5">Login here</h1>
                    <Form.Group className="mb-4">
                        <input type="text" className="form-control" id="InputUsername" name="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter username"></input>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <input type="password" className="form-control" id="InputPassword" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password"></input>
                    </Form.Group>
                    <Button type="submit" className="btn btn-success btn-block btn-lg round mb-2" onClick={submitForm}>
                        Login
                    </Button>
                    <p className="text-center text-muted mt-b mb-0">Don't have an account?
                        <a href="/register" className="fw-bold text-body"><u> Register here</u></a>
                    </p>

                </form>

            </div>


        )
}



