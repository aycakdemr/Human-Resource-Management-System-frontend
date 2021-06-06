import axios from "axios"
export default class EmployerService{
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
    add(employer) {
        return axios.post("http://localhost:8080/api/employers", employer);
    }

    update(employer) {
        return axios.put("http://localhost:8080/api/employers", employer);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/employers?id=${ id }`);
    }
}