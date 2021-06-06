import axios from "axios"
export default class AbilityService{
    getAll(){
        return axios.get("http://localhost:8080/api/abilityjobseekers/getall")
    }
}