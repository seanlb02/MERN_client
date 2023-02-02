
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


export async function addScore(score) {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const reqBody = { timestamp: new Date(), score: `${score}`}
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

export async function getUserScore(user) {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/scores/latest/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return res.json()
}

export async function getUserMonthScore(user) {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/scores/month/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return res.json()
}