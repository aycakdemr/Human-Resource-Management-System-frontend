import axios from "axios"
export default class SchoolService{
    getAll(){
        return axios.get("http://localhost:8080/api/schooljobseekers/getall")
    }
    getAllSchools(){
        return axios.get("http://localhost:8080/api/schools/getall")
    }
    getAllDepartments(){
        return axios.get("http://localhost:8080/api/departments/getall")
    }
    add(school) {
        return axios.post("http://localhost:8080/api/schooljobseekers/add", school);
    }

    update(school,id) {
        return axios.post("http://localhost:8080/api/schooljobseekers/update?id="+id,school);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/schooljobseekers?id=${ id }`);
    }
}