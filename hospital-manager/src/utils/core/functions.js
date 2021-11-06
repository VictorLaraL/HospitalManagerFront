import { store } from "../../redux/store/store";

export function authHeader() {
    const reduxStore = store.getState();

    if (reduxStore.authUserReducer && reduxStore.authUserReducer.access) {
        return { Authorization: "Bearer " + reduxStore.authUserReducer.access };
    } else {
        return {};
    }
}