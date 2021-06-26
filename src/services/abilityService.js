import axios from "axios"
export default class AbilityService{
    getAllAbilitiesWithJobSeekers(){
        return axios.get("http://localhost:8080/api/abilityjobseekers/getall")
    }
    getAllAbilities(){
        return axios.get("http://localhost:8080/api/abilities/getall")
    }
    
    add(ability) {
        return axios.post("http://localhost:8080/api/abilityjobseekers/add", ability);
    }

    update(ability,id) {
        return axios.post("http://localhost:8080/api/abilityjobseekers/update?id="+id,ability);
    }

    delete(ability) {
        return axios.post("http://localhost:8080/api/abilityjobseekers/delete",ability)
}
}