import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-todo-q9gc.vercel.app/"
})
export default instance