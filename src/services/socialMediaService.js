import axios from "axios"
export default class SocialMediaService{
    getAll(){
        return axios.get("http://localhost:8080/api/socialmedias/getall")
    }
    getAllLinkTypes(){
        return axios.get("http://localhost:8080/api/linktypes/getall")
    }
    add(socialmedia) {
        return axios.post("http://localhost:8080/api/socialmedias/add", socialmedia);
    }
    update(socialmedia,id) {
        return axios.post("http://localhost:8080/api/socialmedias/update?id="+id,socialmedia);
    }
    getSocialMediaByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/socialmedias/getbyJobSeekerId?id="+id)
    }
    delete(id) {
        return axios.delete(`http://localhost:8080/api/socialmedias?id=${ id }`);
    }
}