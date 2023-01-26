// Fetches relating to CRUD operations on (any) collection will go in here 

// 1. POST registration form data to database to add new user 

    export async function registerUser(email, usr, pwd, age) {
        let RegBody = { email: `${email}`, usr: `${usr}`, pwd: `${pwd}`, age: `${age}`}
        const res = await
        fetch(`https://${process.env.API_URL}/auth/login/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(AuthBody),
            }
        ).then(res => {
            // if fetch response has an error code, issue an alert pop-up 
                if (!res.ok){
                    alert("Woops.. looks like one of the fields is invalid. Give it another go.")
                }
            // otherwise, store the token returned inyo localStorage
                else {
                    alert("Account Created! Go ahead and log in")
                }})
                .catch((error) => {
                    console.error('Error:', error);
                    })
    }

// 2. POST log in form data to database and return a session TOKEN (JWT)

    export async function logIn(usr, pwd) {
        let AuthBody = { usr: `${email}`, pwd: `${password}` }
        const res = await
            fetch(`https://${process.env.API_URL}/auth/login/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(AuthBody),
            }
        ).then(res => {
            // if fetch response has an error code, issue an alert pop-up 
                if (!res.ok){
                    alert("Invalid username or password.")
                }
            // otherwise, store the token returned inyo localStorage
                else {
                    return res.json()
                    .then((data) => {
                        localStorage.setItem('tokenKey', JSON.stringify(data.token))
                    })
                }})
                .catch((error) => {
                    console.error('Error:', error);
                    })
    }


       