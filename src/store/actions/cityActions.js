export const CHANGE_CITY = "CHANGE_CITY"
export const GET_CİTİES_SUCCESS = "GET_CİTİES_SUCCESS"

export function changeCity(city){
    return{
        type : CHANGE_CITY,
        payload : city
    }
}

export function getCitiesSuccess(city){
    return{
        type : GET_CİTİES_SUCCESS,
        payload : city
    }
}