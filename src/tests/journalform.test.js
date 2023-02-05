// import { describe, test, expect, vi, beforeEach } from 'vitest'
// import { PostEntry, getEntries } from '../API services (fetch functions)/entriesServices'

// global.fetch = vi.fn()

// function createFetchResponse(data) {
//     return {json: () => new Promise((resolve) => resolve(data))}
// }

// describe('Entries service', () => {
//     beforeEach(() => {
//         global.fetch.mockReset()
//     })

//     test('makes a post request to create new entry', async () =>{
//         token = "bkjhcldhflchlrfch"
//         const postEntryBody = {}
//         const response = {
//             success: "entry added"
//         }
//         fetch.mockResolvedValue(createFetchResponse(response))
//         const newPostEntryRepsonse = await PostEntry({
//             postEntryBody,
//         })
//         expect(fetch).toHaveBeenCalledWith(
//             `https://grouchy-vessel-production.up.railway.app/entries/new`,
//             {
//                 method:'POST',
//                 body: JSON.stringify(postEntryBody),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             }

//         )
//         expect(newPostEntryRepsonse).toStrictEqual(response)

//     })
// })