import axios from "axios"
export default class WayOfWorkingService{
    getAll(){
        return axios.get("http://localhost:8080/api/wayofworkings/getall")
    }
}