


export async function getTodaysTag(){
   const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')));
   const res = await fetch(`https://grouchy-vessel-production.up.railway.app/entries/tags/today`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
   })
   return res.json()

}

export async function getMonthsTag(){
    const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')));
    const res = await fetch(`https://grouchy-vessel-production.up.railway.app/entries/tags/month`, {
     method: 'GET',
     headers: {
         'Content-type': 'application/json',
         'Authorization': `Bearer ${token}`,
     },
    })
    return res.json()
}

