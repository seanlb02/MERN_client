import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import {registerUser} from '../API services (fetch functions)/authServices'

const Register = () => {
    const[email,setEmail] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const[warning, setWarning] = useState("")

        const submitForm = function (e) {
            e.preventDefault();
            // cant seem to catch mongoose validator error in back end - but email syntax is validated as is username duplication
            if (email.includes("@") && email.includes(".")) {
                registerUser(email, username, password)
            }
            else {setWarning("One or more inputs is invalid. Try Again")}
            
        }

        

        return (
            <div className= "d-flex align-items-center justify-content-center min-vh-100">
                <form>
                    <h1 className="header mb-5">Sign-up here</h1>
                    <Form.Group className="mb-4">
                        <input type="text" class="form-control" id="InputEmail" name ="email"  onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter email"></input>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <input type="text" class="form-control" id="InputUsername" name="username"  onChange={(e) => {setUsername(e.target.value) }} placeholder="Enter username"></input>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <input type="password" className="form-control" id="InputPassword" name="password"  onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password"></input>
                    </Form.Group>
                    <div className="mb-2 text-danger">{warning}</div>
                    <Button type="submit" className="btn btn-success btn-block btn-lg round mb-2" onClick={submitForm}>
                        Sign-up
                    </Button>
                    <p className="text-center text-muted mt-b mb-0">Have and account already?
                        <a href="/login" className="fw-bold text-body"><u> Login here</u></a>
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


