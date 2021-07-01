import {
    LOAD_ROAD, FAIL_ROAD,
    GET_ROAD_ID, GET_RAOD_SEARCH, GET_ROADS,GET_ALL_ROADS, DELETE_ROADS, UPDATE_ROADS, GET_ROAD_BY_ID
} from '../constants/road'


const initialState = {
    loadRoad: false,
    errors: null,
    roads: [],
    road_id: {},
    roadById:{}
}

export const roadReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_ROAD : 
            return {...state,loadRoad:true}
        case GET_RAOD_SEARCH:
            return {...state, loadRoad:false ,roads:payload}
        case GET_ROADS : 
            return {...state, loadRoad:false , roads:payload}
        case FAIL_ROAD : 
            return {...state , loadRoad:false , errors:payload}
        case GET_ALL_ROADS : 
            return {...state , loadRoad:false , roads:payload}
        case GET_ROAD_ID : 
            return { ...state, loadRoad: false, road_id: payload }
        
        case DELETE_ROADS : 
            return { ...state, loadRoad: false, road_id: payload }
        case UPDATE_ROADS:
            
            return { ...state.roads.map((road) => road._id === payload._id ? payload : road), loadRoad: false };
        
        case GET_ROAD_BY_ID:
        return {...state, roadById:payload.response}
        default:
            return state;
    }
}