import axios from "axios"
export default class CompanySectorService{
    getAll(){
        return axios.get("http://localhost:8080/api/companysectors/getall")
    }
}