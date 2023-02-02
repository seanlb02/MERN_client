
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