import {LOAD_ROAD, FAIL_ROAD, 
    GET_ROAD_ID,GET_RAOD_SEARCH, GET_ROADS,GET_ALL_ROADS, DELETE_ROADS, UPDATE_ROADS, GET_ROAD_BY_ID} from '../constants/road'
import axios from 'axios'



// add a new raod
export const addRoad =(user_id,road)=> async(dispatch) => {
    try {
        await axios.post(`/api/road/${user_id}`,road)
    } catch (error) {
        dispatch({
            type:FAIL_ROAD,
            payload:error
        })
    }
}
//seaching road by departure and destination
export const searchRoad =(user_id) => async(dispatch)=> {
    dispatch({
        type:LOAD_ROAD
    })
    try {
        const result = await axios.get(`/api/road/${user_id}/search${window.location.search}`)
        dispatch({
            type:GET_RAOD_SEARCH, 
            payload: result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_ROAD, 
            payload:error
        })
    }
}

//get a road by id
export const getroad =(road_id) => async(dispatch)=> {
    dispatch({
        type:LOAD_ROAD
    })
    try {
        const result = await axios.get(`/api/road/${road_id}`)
        dispatch({
            type:GET_ROAD_ID, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_ROAD, 
            payload:error
        })
    }
}
//get roads by specific id
export const getRoads =(user_id) => async(dispatch)=> {
    dispatch({
        type:LOAD_ROAD
    })
    try {
        const result= await axios.get(`/api/road/user/${user_id}`)
        dispatch({
            type:GET_ROADS, 
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_ROAD, 
            payload:error
        })
    }
}
//vget all roads 
export const getallRoads =() => async(dispatch)=> {
    dispatch({
        type:LOAD_ROAD
    })
    try {
        const result = await axios.get('/api/road/')
        dispatch({
            type:GET_ALL_ROADS,
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:FAIL_ROAD, 
            payload:error
        })
        
    }
}



export const deleteRoads = (id) => async (dispatch) => {
      
      try {
            await axios.delete(`/api/road/${id}`);
            dispatch({ type: DELETE_ROADS, payload: id });
            
      } catch (error) {
            console.log(error);
            
      }
      
};



export const updateRoads = (id,updatedRoad) => async (dispatch) => {
     axios
    .put(`/api/road/user/${id}`, updatedRoad)
    .then(() => dispatch(getallRoads()))
    .catch((err) => console.log(err));
      
};

export const getRoadById = (id) => (dispatch) => {
  axios
    .get(`/api/road/${id}`)
    .then((res) => dispatch({ type: GET_ROAD_BY_ID, payload: res.data }))
    .catch((err) => console.log(err));
};
