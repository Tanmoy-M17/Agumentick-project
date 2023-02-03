import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_IMAGES_FAILURE, GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS } from "./actionType"

const intialState={
    data:[],
    images:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case GET_DATA_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_DATA_SUCCESS:{
            return {
                ...state,
                data:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_DATA_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        
        case GET_IMAGES_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_IMAGES_SUCCESS:{
            return {
                ...state,
                images:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_IMAGES_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
    
        default:
            return {...state}
    }
}