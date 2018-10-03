import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from "./constants";


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
// export const requestRobots = (dispatch) => { zmianana higher order function aby zwrocic funkcje dla thunk aby zadzialal musi miec funkcje

export const requestRobots = ()=>(dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});

    window.fetch('https://uinames.com/api/?ext&amount=55&region=poland')
    .then(response=> response.json())
    .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}))
    .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED, payload: error }))
}

