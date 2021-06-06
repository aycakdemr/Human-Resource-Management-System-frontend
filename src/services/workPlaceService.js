import axios from "axios"
export default class WorkPlaceService{
    getAll(){
        return axios.get("http://localhost:8080/api/workplacesjobseekers/getall")
    }
    add(workplace) {
        return axios.post("http://localhost:8080/api/workplacesjobseekers", workplace);
    }

    update(workplace) {
        return axios.put("http://localhost:8080/api/workplacesjobseekers", workplace);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/workplacesjobseekers?id=${ id }`);
    }
}