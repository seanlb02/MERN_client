
export async function listTracking() {

    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/track/list/tracking`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return res.json()

}

export async function listTrackers() {

    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/track/list/trackers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return res.json()

}

export async function authoriseTracker(username) {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/track/authorise/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return res.json()
    

}

export async function revokeTracker(username) {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/track/revoke/${username}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    window.location.reload()
    return res.json()
}

export async function validateTracker(username) {
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/track/validate/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return res.json()
}
    