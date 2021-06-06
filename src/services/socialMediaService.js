import axios from "axios"
export default class SocialMediaService{
    getAll(){
        return axios.get("http://localhost:8080/api/socialmedias/getall")
    }
}