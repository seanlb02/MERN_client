import React, {useState}from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

const Login = ({setLoginUser}) => {
const history = useHistory()
    const [user,setUser] = useState({
        email:"",
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
    const login =()=>{
        axios.post("http://localhost:5173/login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    history.push("/")})
    }
    return (
        <form>
            <div class="form-group">
                <label for="InputEmail">Email Address</label>
                <input type="text" class="form-control" id="InputEmail" name="email" value={user.email} onChange={handleChange} placeholder="Enter email"></input>
            </div>
            <div class="form-group">
                <label for="InputUsername">Username</label>
                <input type="text" class="form-control" id="InputUsername" name="username" value={user.username} onChange={handleChange} placeholder="Enter username"></input>
            </div>
            <div class="form-group">
                <label for="InputPassword">Password</label>
                <input type="password" class="form-control" id="InputPassword" name="password" value={user.password} onChange={handleChange} placeholder="Enter password"></input>
            </div>
            <Button type="submit" class="btn btn-success btn-block btn-lg round" onClick={login}>
                Sign-up
            </Button>

        </form>

    )
}
export default Login

// export default function Login() {

//   return (
//     <div className="color-overlay d-flex
//     justify-content-center align-items-center">
//         <Form className= "rounded p-4 p-sm-3">
//             <h1 className="header">Login</h1>
//             <Form.Group className= "mb-3"
//             controlID="formBasicEmail">
//                 <Form.Label>Email or username</Form.Label>
//                 <Form.Control type="email"
//                 placeholder="Enter Email/Username"/>
//             </Form.Group>

//             <Form.Group className = "mb-3"
//             controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password"
//                 placeholder= "Enter Password"/>
//             </Form.Group>

//             <Form.Group className="mb-3"
//                 controlId="formBasicCheckbox">
//                 <Form.Check type= "checkbox" label="Remember Me"/>
//             </Form.Group>

//             <Button type="button" class="btn btn-success btn-block btn-lg round">
//                 Login
//             </Button>

//             <p class="text-center text-muted mt-b">Don't have an account?
//                 <a href="#" class="fw-bold text-body"><u>Sign-up here</u></a>
//             </p>


//         </Form>
//     </div>
//   )
// }

