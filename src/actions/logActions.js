import { 
    GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG, 
    UPDATE_LOG,
    SEARCH_LOGS, 
    SET_CURRENT, 
    CLEAR_CURRENT
} from './types'

// getting logs from API server
// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

export const getLogs = () => dispatch => {
    try {
        setLoading();

        fetch('/logs')
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: GET_LOGS,
                    payload: data
                })
            })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const addLog = (log) => dispatch => {
    try {
        setLoading();

        fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: ADD_LOG,
                    payload: data
                })
            })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const deleteLog = (id) => dispatch => {
    try {
        setLoading();

        fetch(`/logs/${id}`, {
            method: 'DELETE'
        })
                    
        dispatch({
            type: DELETE_LOG,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const updateLog = (log) => dispatch => {
    try {
        setLoading();

        fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data => {
                dispatch({
                    type: UPDATE_LOG,
                    payload: data
                })
            }))
                    
        

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const searchLogs = (query) => dispatch => {
    try {
        setLoading();

        fetch(`/logs?q=${query}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: SEARCH_LOGS,
                    payload: data
                })
            })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}