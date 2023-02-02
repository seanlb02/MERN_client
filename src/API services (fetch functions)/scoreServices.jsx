
export async function getCurrentScore() {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/scores/latest`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return res.json()
}


export async function addScore() {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const reqBody = {username: `${username}`, timestamp: `${timestamp}`, score: `${score}`}
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/scores/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(reqBody)
    })
    return res.json()
}