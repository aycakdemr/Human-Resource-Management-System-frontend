import axios from "axios"


export default class EmployeeService{
    getById(id){
        return axios.get("http://localhost:8080/api/employees/getById?id="+id)
    }
    update(employee,id) {
        return axios.post("http://localhost:8080/api/employees/update?id="+id,employee);
    }
}