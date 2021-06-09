import axios from "axios"

export default class JobAdvertisementService{
    
    getTwoAdvert(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getTwoAdvert")
    }
    getAll(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }
    add(adv) {
        return axios.post("http://localhost:8080/api/jobadvertisements", adv);
    }

    update(adv) {
        return axios.put("http://localhost:8080/api/jobadvertisements", adv);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/jobadvertisements?id=${ id }`);
    }
}