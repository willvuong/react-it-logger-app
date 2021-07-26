import { 
    GET_TECHS, 
    ADD_TECH, 
    DELETE_TECH, 
    SET_LOADING, 
    TECHS_ERROR 
} from "./types";

export const getTechs = () => dispatch => {
    try {
        setLoading();

        fetch('/techs')
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: GET_TECHS,
                    payload: data
                })
            })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

export const addTech = (tech) => dispatch => {
    try {
        setLoading();
       
        fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: ADD_TECH,
                    payload: data
                })
            })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

export const deleteTech = (id) => dispatch => {
    try {
        setLoading();

        fetch(`/tech/${id}`, {
            method: 'DELETE'
        })
                    
        dispatch({
            type: DELETE_TECH,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}