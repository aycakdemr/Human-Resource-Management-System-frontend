import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../actions/favAdvertActions";
import {favAdvertListItems} from "../initialValues/favAdvertListItems";

const initialState = {
    favAdvertListItems : favAdvertListItems
}

export default function favAdvertReducer(state = initialState,{type,payload}) {
       switch (type) {
           
           case ADD_TO_LIST:
               let jobAdvertisement = state.favAdvertListItems.find(a=>a.jobAdvertisement.id===payload.id)
                if (jobAdvertisement) {
                    jobAdvertisement.quantity++;
                     return{
                      ...state
                    }
                } else {
                    return{
                        ...state,
                        favAdvertListItems:[...state.favAdvertListItems,{quantity:1,jobAdvertisement:payload}]
                    }
                }
            case REMOVE_FROM_LIST:
                return{
                    ...state,
                    favAdvertListItems:state.favAdvertListItems.filter(a=>a.jobAdvertisement.id !== payload.id)
                }
           default:
               return {
                 ...state
               }
              
       }
}
