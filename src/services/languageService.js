import axios from "axios"
export default class LanguageService{
    getAll(){
        return axios.get("http://localhost:8080/api/languagejobseekers/getall")
    }
    getAllLanguages(){
        return axios.get("http://localhost:8080/api/languages/getall")
    }
    
    add(language) {
        return axios.post("http://localhost:8080/api/languagejobseekers/add", language);
    }
    getAllLanguageLevels(){
        return axios.get("http://localhost:8080/api/languagelevels/getall")
    }
    update(language,id) {
        return axios.post("http://localhost:8080/api/languagejobseekers/update?id="+id,language);
    }

    getLanguagesByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/languagejobseekers/getbyJobSeekerId?id="+id)
    }
    delete(id) {
        return axios.delete(`http://localhost:8080/api/languagejobseekers?id=${ id }`);
    }
}