import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(response => response.data)
}

const updateNumber = (id, newObject) => {
    const url = `${baseUrl}/${id}`
    const req = axios.put(url, newObject)
    return req.then(response => response.data)
}

const remove = (id) => {
    const url = `${baseUrl}/${id}`
    const req = axios.delete(url)
    return req.then(response => response.data)
}


export default { getAll, create, remove, updateNumber }