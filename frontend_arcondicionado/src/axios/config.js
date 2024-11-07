import axios from "axios"

const WaterAPI = axios.create({
    baseURL: "http://127.0.0.1:5249/api/"
})

export default WaterAPI;