import axios from 'axios';
import store from '../store';
import { getAllPhasesSuccess, getAllBouquetsSuccess, userProfileSuccess } from '../actions/stb-actions';


/**
 * Get all process Phases
 */

export function getAllPhases() {
    return axios.get('http://127.0.0.1:3001/api/enigma-get-phases')
        .then(response => {
            store.dispatch(getAllPhasesSuccess(response.data.phases));
            console.log("response.data.phases",response.data.phases)
            return response;
        });
}

export function getAllBouquets() {
    var actual_state=store.getState().stbListReducer;
    return axios.get(actual_state.phases[actual_state.current_phase].url)
        .then(response => {
            store.dispatch(getAllBouquetsSuccess(response.data.payload));
            console.log("response.data.payload",response.data.payload)
            return response;
        });
}

export function getServicesFromBouquets() {
    var actual_state=store.getState().stbListReducer;
    return axios.get(actual_state.phases[actual_state.current_phase].url)
        .then(response => {
            store.dispatch(getAllBouquetsSuccess(response.data.payload));
            console.log("response.data.payload",response.data.payload)
            return response;
        });
}