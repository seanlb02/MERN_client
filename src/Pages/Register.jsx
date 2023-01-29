import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {
    const [user,setUser] = useState({
        email: "",
        username: "",
        password: ""
    })
    const handleChange = e => {
    const {name,value} = e.target
    setUser({
        ...user,
        [name]:value
    })
    }
// register function
    const egister = ()=>{
        const{email, username,password} = user
        if (email && username && password ){
            axios.post("http://localhost:5173/register",user)
            .then(res=>console.log(res))
        }
        else{
            alert("Invalid user")
        }
        return (
            <form>
                <div class ="form-group">
                    <label for="InputEmail">Email Address</label>
                    <input type="email" class="form-control" id="InputEmail" name ="email" value ={user.email} onChange={handleChange} placeholder= "Enter email"></input>
                </div>
                <div class="form-group">
                    <label for="InputUsername">Username</label>
                    <input type="username" class="form-control" id="InputUsername" name="username" value={user.username} onChange={handleChange} placeholder="Enter username"></input>
                </div>
                <div class="form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" class="form-control" id="InputPassword" name="password" value={user.password} onChange={handleChange} placeholder="Enter password"></input>
                </div>
                <Button type="button" class="btn btn-success btn-block btn-lg round" onClick={egister}>
                     Sign-up
                </Button>

            </form>
        )
    }
}
export default Register

// export default function Register() {
//     return (
//         <div className="d-flex
//     justify-content-center align-items-center">
//             <Form className="rounded p-4 p-sm-3">
//                 <h1 class="header">Sign-up here</h1>
//                 <Form.Group className="mb-3"
//                     controlID="formBasicEmail">
//                     <Form.Label>Email</Form.Label>
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

//                 <p class="text-center text-muted mt-b mb-0">Have and account already?
//                     <a href="#" class="fw-bold text-body"><u>Login here</u></a>
//                 </p>


//             </Form>
//         </div>
//     )
// }


