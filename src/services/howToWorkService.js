import axios from "axios"

export default class HowToWorkService{
    getAll(){
        return axios.get("http://localhost:8080/api/howtoworks/getall")
    }
}