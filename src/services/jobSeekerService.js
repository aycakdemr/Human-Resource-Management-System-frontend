import axios from "axios"

export default class JobSeekerService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }
    add(jobseeker) {
        return axios.post("http://localhost:8080/api/jobseekers", jobseeker);
    }

    update(jobseeker) {
        return axios.put("http://localhost:8080/api/jobseekers", jobseeker);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/jobseekers?id=${ id }`);
    }
}