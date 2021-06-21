import axios from "axios"

export default class ApprovedAdvertsService{
    
    add(adv){
        return axios.post("http://localhost:8080/api/approvedjobAdverts/add",adv)
    }
}