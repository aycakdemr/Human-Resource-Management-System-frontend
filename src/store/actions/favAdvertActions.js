
export const ADD_TO_LIST = "ADD_TO_LIST"
export const REMOVE_FROM_LIST ="REMOVE_FROM_LIST"
 
export function addToList(jobAdvertisement){
    return{
        type : ADD_TO_LIST,
        payload : jobAdvertisement
    }
}

export function removeFromList(jobAdvertisement){
    return{
        type : REMOVE_FROM_LIST,
        payload : jobAdvertisement
    }
}