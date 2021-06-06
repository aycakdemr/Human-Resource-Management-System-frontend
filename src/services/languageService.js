import axios from "axios"
export default class LanguageService{
    getAll(){
        return axios.get("http://localhost:8080/api/languagejobseekers/getall")
    }
    add(language) {
        return axios.post("http://localhost:8080/api/languagejobseekers", language);
    }

    update(language) {
        return axios.put("http://localhost:8080/api/languagejobseekers", language);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/languagejobseekers?id=${ id }`);
    }
}