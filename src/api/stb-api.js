import axios from 'axios';
import store from '../store';
import { getAllPhasesSuccess, deleteUserSuccess, userProfileSuccess } from '../actions/stb-actions';


/**
 * Get all process Phases
 */

export function getPhases() {
    return axios.get('http://127.0.0.1:3001/api/enigma-get-phases')
        .then(response => {
            store.dispatch(getAllPhasesSuccess(response.data.phases));
            console.log("response.data.phases",response.data.phases)
            return response;
        });
}

