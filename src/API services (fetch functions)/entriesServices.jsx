

    // This function is to post a new entry to the database 
    export async function PostEntry( title, description, tags){
        const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
        const postEntryBody = {title: `${title}`, text: `${description}`, timestamp: new Date(), tags: tags}
        const res = await fetch (`https://grouchy-vessel-production.up.railway.app/entries/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            body: JSON.stringify(postEntryBody),
        } ).then(res => {
                    console.log("Entry created successfully")
                })
                .catch((error) => {
                    console.error('Error:', error);
                    })
    }

    // This function is to retrieve a list of the logged in user's entries --> to be put in a useEffect on user profile/journal
    export async function getEntries () {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/entries/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
     })
     return res.json()
    }