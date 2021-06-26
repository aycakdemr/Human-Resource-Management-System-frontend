import axios from "axios"


export default class EmployeeService{
    getById(id){
        return axios.get("http://localhost:8080/api/employees/getById?id="+id)
    }
}