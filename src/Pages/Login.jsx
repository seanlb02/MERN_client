import React, {useState}from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

export default function Login() {

  return (
    <div className="color-overlay d-flex
    justify-content-center align-items-center">
        <Form className= "rounded p-4 p-sm-3">
            <h1 className="header">Login</h1>
            <Form.Group className= "mb-3"
            controlID="formBasicEmail">
                <Form.Label>Email or username</Form.Label>
                <Form.Control type="email"
                placeholder="Enter Email/Username"/>
            </Form.Group>

            <Form.Group className = "mb-3"
            controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                placeholder= "Enter Password"/>
            </Form.Group>

            <Form.Group className="mb-3"
                controlId="formBasicCheckbox">
                <Form.Check type= "checkbox" label="Remember Me"/>
            </Form.Group>

            <Button type="button" class="btn btn-success btn-block btn-lg round">
                Login
            </Button>

            <p class="text-center text-muted mt-b">Don't have an account?
                <a href="#" class="fw-bold text-body"><u>Sign-up here</u></a>
            </p>


        </Form>
    </div>
  )
}

