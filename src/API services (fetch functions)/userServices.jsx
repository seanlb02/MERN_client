
// all fetches realting to the user collection (CRUD) will go here 


//  retrieve user data to be stored as state in profile parent component

    // const getUserData = async function () {
    //     // 1. get token from session storage 

    //     // 2. check to see if its expired, if it has log the user out
      
    // }


    export const deleteAccount = async function () {
        const res = await
        fetch(`https://grouchy-vessel-production.up.railway.app/users/account/delete`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
        }
    ).then(res => {
        // if fetch response has an error code, issue an alert pop-up
            if (res.ok){
                alert("Account Deleted. Sorry to see you go!")
            }
        // otherwise, store the token returned inyo localStorage
            else {
                alert("Hmm something went wrong, try reloading the page")
            }})
            .catch((error) => {
                console.error('Error:', error);
                })


    }