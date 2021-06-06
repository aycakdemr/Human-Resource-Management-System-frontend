import axios from "axios"
export default class PositionLevelService{
    getAll(){
        return axios.get("http://localhost:8080/api/positionlevels/getall")
    }
}