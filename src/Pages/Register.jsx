import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import {registerUser} from '../API services (fetch functions)/authServices'

const Register = () => {
    const[email,setEmail] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

        const submitForm = function (e) {
            e.preventDefault();
            registerUser(email, username, password)
        }


        return (
            <div className= "d-flex align-items-center justify-content-center min-vh-100">
                <form>
                    <h1 class="header">Sign-up here</h1>
                    <Form.Group className="mb-3">
                        <input type="text" class="form-control" id="InputEmail" name ="email"  onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter email"></input>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input type="text" class="form-control" id="InputUsername" name="username"  onChange={(e) => {setUsername(e.target.value) }} placeholder="Enter username"></input>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input type="password" class="form-control" id="InputPassword" name="password"  onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password"></input>
                    </Form.Group>
                    <Button type="submit" class="btn btn-success btn-block btn-lg round" onClick={submitForm}>
                        Sign-up
                    </Button>
                    <p class="text-center text-muted mt-b mb-0">Have and account already?
                        <a href="/login" class="fw-bold text-body"><u> Login here</u></a>
                    </p>

                </form>

            </div>
        )

}
export default Register

// export default function Register() {
//     return (
//         <div className="d-flex
//     justify-content-center align-items-center">
//             <Form className="rounded p-4 p-sm-3">
//                 <Form.Group className="mb-3"
//                     controlID="formBasicEmail">
                    // <Form.Label>Email</Form.Label>
//                     <Form.Control type="email"
//                         placeholder="Enter Email" />
//                 </Form.Group>

//                 <Form.Group className="mb-3"
//                     controlID="formBasicEmail">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control type="username"
//                         placeholder="Enter Username" />
//                 </Form.Group>

//                 <Form.Group className="mb-3"
//                     controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password"
//                         placeholder="Enter Password" />
//                 </Form.Group>

//                 <Button type="button" class="btn btn-success btn-block btn-lg round">
//                     Sign-up
//                 </Button>



//             </Form>
//         </div>
//     )
// }


