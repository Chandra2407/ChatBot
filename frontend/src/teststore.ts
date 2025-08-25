
import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from "redux-thunk";
import axios from 'axios';


const logger = createLogger();

export const ACTION_TYPES = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    SET_THEME: "set_theme"
};

export const actionCreators = {
    increment: () => ({ type: ACTION_TYPES.INCREMENT }),
    decrement: () => ({ type: ACTION_TYPES.DECREMENT }),
    setTheme: (theme: "dark" | "light") => ({ type: ACTION_TYPES.SET_THEME, payload: theme })
    // Add more action creators as needed
};

const initialCountState: countState = {
    count: 0
};
const initialThemeState: themeState = {
    theme: "light"
};
const countReducer = (state: countState = initialCountState, action: Action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return { ...state, count: state.count + 1 };
        case ACTION_TYPES.DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

const themeReducer = (state: themeState = initialThemeState, action: Action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
};

const asyncActions = {
    FETCH_USERS: "fetch_users",
    FETCH_USERS_SUCCESS: "fetch_users_success",
    FETCH_USERS_FAILURE: "fetch_users_failure"
}

export const asyncActionCreators = {
    fetchUsers: () => ({ type: asyncActions.FETCH_USERS }),
    fetchUsersSuccess: (users: any[]) => ({ type: asyncActions.FETCH_USERS_SUCCESS, payload: users }),
    fetchUsersFailure: (error: string) => ({ type: asyncActions.FETCH_USERS_FAILURE, payload: error })
};

const asyncState: asyncState = {
    loading: false,
    error: null,
    users: []
}

const asyncReducer = (state: asyncState = asyncState, actons: Action) => {
    switch (actons.type) {
        case asyncActions.FETCH_USERS:
            return { ...state, loading: true }
        case asyncActions.FETCH_USERS_SUCCESS:
            return { ...state, loading: false, users: actons.payload }
        case asyncActions.FETCH_USERS_FAILURE:
            return { ...state, loading: false, error: actons.payload }
        default:
            return state
    }
}

export const fetchUsers = () => {
    return async (dispatch: any) => {
        dispatch(asyncActionCreators.fetchUsers());
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch(asyncActionCreators.fetchUsersSuccess(response.data));
        } catch (error) {
            let errorMessage = "Unknown error";
            if (error && typeof error === "object" && "message" in error) {
                errorMessage = (error as { message: string }).message;
            }
            dispatch(asyncActionCreators.fetchUsersFailure(errorMessage));
        }
    }
}

export const store = createStore(
    combineReducers({
        count: countReducer,
        theme: themeReducer,
        async: asyncReducer
    }),
    applyMiddleware(thunk)
);

type Action = {
    type: string;
    payload?: any;
};

export interface countState {
    count: number;
}

export interface themeState {
    theme: "dark" | "light";
}

export interface asyncState {
    loading: boolean;
    error: string | null;
    users: any[];
}