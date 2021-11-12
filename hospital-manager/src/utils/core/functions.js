import { store } from "../../redux/store/store";

export function authHeader() {
    const reduxStore = store.getState();
    
    if (reduxStore.authUserReducer.succesfull) {
        return { user_token: reduxStore.authUserReducer.succesfull };
    } else {
        return {'Content-Type': 'application/x-www-form-urlencoded'};
    }
}