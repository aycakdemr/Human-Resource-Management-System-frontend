import axios from "axios"
export default class SocialMediaService{
    getAll(){
        return axios.get("http://localhost:8080/api/socialmedias/getall")
    }
    add(socialmedia) {
        return axios.post("http://localhost:8080/api/socialmedias", socialmedia);
    }

    update(socialmedia) {
        return axios.put("http://localhost:8080/api/socialmedias", socialmedia);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/socialmedias?id=${ id }`);
    }
}