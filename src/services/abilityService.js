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

    update(ability) {
        return axios.put("http://localhost:8080/api/abilityjobseekers", ability);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/abilityjobseekers?id=${ id }`);
    }
}