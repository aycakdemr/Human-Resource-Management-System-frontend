import axios from "axios"
export default class SchoolService{
    getAll(){
        return axios.get("http://localhost:8080/api/schooljobseekers/getall")
    }
    add(school) {
        return axios.post("http://localhost:8080/api/schooljobseekers", school);
    }

    update(school) {
        return axios.put("http://localhost:8080/api/schooljobseekers", school);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/schooljobseekers?id=${ id }`);
    }
}