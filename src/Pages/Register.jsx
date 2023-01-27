import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Register() {
    return (
        <div className="d-flex
    justify-content-center align-items-center">
            <Form className="rounded p-4 p-sm-3">
                <h1 class= "header">Sign-up here</h1>
                <Form.Group className="mb-3"
                    controlID="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3"
                    controlID="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username"
                        placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3"
                    controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Enter Password" />
                </Form.Group>

                <Button type="button" class="btn btn-success btn-block btn-lg round">
                    Sign-up
                </Button>

                <p class = "text-center text-muted mt-b mb-0">Have and account already?
                <a href="#" class="fw-bold text-body"><u>Login here</u></a>
                </p>


            </Form>
        </div>
    )
}

