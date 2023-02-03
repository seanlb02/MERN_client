

import { LogOut } from "./authServices"



    export const getUserData = async function () {
        // 1. get token from session storage 
        const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
        // 2. check to see if its expired, if it has log the user out
        const res = await fetch(`https://grouchy-vessel-production.up.railway.app/users/data`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
        })
        return res.json()
    }

    export const editMemo = async function (memo) {
        const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
        const reqBody = ({memo: `${memo}`})
        const res = await fetch(`https://grouchy-vessel-production.up.railway.app/users/memo/update`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(reqBody)
        })
        return res.json()

        
    }


    export const deleteAccount = async function () {
        const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

        const res = await
        fetch(`https://grouchy-vessel-production.up.railway.app/users/account/delete`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
        }
    ).then(res => {
        // if fetch response has an error code, issue an alert pop-up
            if (res.ok){
                alert("Account Deleted. Sorry to see you go!")
                window.location = '/'
                LogOut()
            }
        // otherwise, try again
            else {
                alert("Hmm something went wrong, try reloading the page")
            }})
            .catch((error) => {
                console.error('Error:', error);
                })
    }