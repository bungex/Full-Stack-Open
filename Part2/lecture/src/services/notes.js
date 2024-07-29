import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const req = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
      }
    return req.then(response => {
        return response.data.concat(nonExisting)
    })
}

const create = newObject => {
  const req = axios.post(baseUrl, newObject)
    return req.then(response => response.data)

}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
  return req.then(response => response.data)
}

// Since the key (left one) is same as the variable (right) we can write as such:
// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }

export default { getAll, create, update }