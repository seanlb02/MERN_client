import React, {useState}from 'react'
import {Form, Button} from 'react-bootstrap'
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
                    <h1 class="header">Login here</h1>
                    <Form.Group className="mb-3">
                        <input type="text" class="form-control" id="InputUsername" name="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter username"></input>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input type="password" class="form-control" id="InputPassword" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password"></input>
                    </Form.Group>
                    <Button type="submit" class="btn btn-success btn-block btn-lg round" onClick={submitForm}>
                        Sign-up
                    </Button>
                    <p class="text-center text-muted mt-b mb-0">Don't have an account?
                        <a href="/register" class="fw-bold text-body"><u> Register here</u></a>
                    </p>

                </form>
            </div>


        )
}



