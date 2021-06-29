import axios from "axios"
export default class EmployerService{
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
    getAllByEmployerCase(){
        return axios.get("http://localhost:8080/api/employers/getByEmployerCaseId")
    }
    getEmployerCases(){
        return axios.get("http://localhost:8080/api/employercase/getall")
    }
    getByIdForUsers(id){
        return axios.get("http://localhost:8080/api/employers/getByIdForUsers?id="+id)
    }
    getByIdForAdmins(id){
        return axios.get("http://localhost:8080/api/employers/getByIdForAdmins?id="+id)
    }
    add(employer) {
        return axios.post("http://localhost:8080/api/employers", employer);
    }
    update(employer,id) {
        return axios.post("http://localhost:8080/api/employers/update?id="+id,employer);
    }
    confirmUpdate(employer,id) {
        return axios.post("http://localhost:8080/api/employers/ConfirmUpdate?EmployerId="+id,employer);
    }
    delete(id) {
        return axios.delete(`http://localhost:8080/api/employers?id=${ id }`);
    }
}