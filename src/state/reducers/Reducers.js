import {ColorReducer} from "./ColorReducer"
import {ValueReducer} from "./ValueReducer"


export const Reducers =()=>
{
    return{
        colorReducer: ColorReducer(),
        valueReducer:ValueReducer()
    }
}