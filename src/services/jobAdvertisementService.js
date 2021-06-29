import axios from "axios"

export default class JobAdvertisementService{
    
    getTwoAdvert(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getTwoAdvert")
    }
    getAllActivetedTrue(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByIsActivatedTrue")
    }
    getAllActivetedFalse(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByIsActivatedFalse")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getbyId?id="+id)
    }
    getByFilter(jobPositionId,companySectorId,wayOfWorkingId,positionLevelId,educationLevelId,cityId){
        return axios.get(`http://localhost:8080/api/jobadvertisements/getbyFilter?cityId=${cityId}&companySectorId=${companySectorId}&educationLevelId=${educationLevelId}&jobPositionId=${jobPositionId}&positionLevelId=${positionLevelId}&wayOfWorkingId=${wayOfWorkingId}`)
    }
    getByEmployerId(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByEmployerId?id="+id)
    }
    getAllActiveByPage(number,page){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByisActive?pageNumber=" +
        number +
        "&pageSize=" +
        page)
    }
    
    add(adv) {
        return axios.post("http://localhost:8080/api/jobadvertisements/add", adv);
    }

    update(adv) {
        return axios.put("http://localhost:8080/api/jobadvertisements", adv);
    }

    delete(id) {
        return axios.delete(`http://localhost:8080/api/jobadvertisements?id=${ id }`);
    }
}