import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-todo-eight-beta.vercel.app/"
})
export default instance