import axios from "axios"

export default class ApprovedAdvertsService{
    
 
    getAll(){
        return axios.get("http://localhost:8080/api/approvedjobAdverts/getall")
    }
    add(adv){
        return axios.post("http://localhost:8080/api/approvedjobAdverts/add",adv)
    }
}