import axios from "axios"
export default class PositionLevelService{
    getPositionLevels(){
        return axios.get("http://localhost:8080/api/positionlevels/getall")
    }
}