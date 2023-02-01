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

            <form>
                <div class="form-group">
                    <label for="InputUsername">Username</label>
                    <input type="text" class="form-control" id="InputUsername" name="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter username"></input>
                </div>
                <div class="form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" class="form-control" id="InputPassword" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password"></input>
                </div>
                <Button type="submit" class="btn btn-success btn-block btn-lg round" onClick={submitForm}>
                    Sign-up
                </Button>
                <p class="text-center text-muted mt-b mb-0">Don't have an account?
                    <a href="#" class="fw-bold text-body"><u>Register here</u></a>
                </p>

            </form>


        )
}



