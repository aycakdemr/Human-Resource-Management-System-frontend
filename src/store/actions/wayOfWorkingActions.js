export const CHANGE_WAY_OF_WORKING = "CHANGE_WAY_OF_WORKING"

export function changeWayOfWorking(wayOfWorking){
    return{
        type : CHANGE_WAY_OF_WORKING,
        payload : wayOfWorking
    }
}
