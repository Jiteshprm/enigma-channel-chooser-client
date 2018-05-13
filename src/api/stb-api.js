import axios from 'axios';
import store from '../store';
import {
    getAllPhasesSuccess, getAllBouquetsSuccess,
    getAllChannelsSuccess, selectChannelSuccess, runChannelSuccess
} from '../actions/stb-actions';


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

export function getServicesFromBouquet(service_referece, service_name) {
    var actual_state=store.getState().stbListReducer;
    var replaced_values=actual_state.phases[actual_state.current_phase].url.replace("${service_reference}", service_referece).replace("${service_name}", service_name);
    console.log("replaced_values", replaced_values)
    return axios.get(replaced_values)
        .then(response => {
            store.dispatch(getAllChannelsSuccess(response.data));
            console.log("response.data",response.data)
            return response;
        });
}

export function selectServiceFromBouquet(service_referece, service_name) {
    var actual_state=store.getState().stbListReducer;
    var replaced_values=actual_state.phases[actual_state.current_phase].url.replace("${service_reference}", service_referece).replace("${service_name}", service_name);
    console.log("replaced_values", replaced_values)
    return axios.get(replaced_values)
        .then(response => {
            store.dispatch(selectChannelSuccess(response.data.payload));
            console.log("response.data.payload",response.data.payload)
            return response;
        });
}

export function runServiceFromBouquet() {
    var actual_state=store.getState().stbListReducer;
    console.log("url", actual_state.phases[actual_state.current_phase].url)
    return axios.get(actual_state.phases[actual_state.current_phase].url)
        .then(response => {
            store.dispatch(runChannelSuccess(response.data.payload));
            console.log("response.data.payload",response.data.payload)
            return response;
        });
}