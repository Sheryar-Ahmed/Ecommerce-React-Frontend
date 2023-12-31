import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_pass_REQUEST,
    USER_UPDATE_pass_SUCCESS,
    USER_UPDATE_pass_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_UPDATED_REQUEST,
    USER_UPDATED_SUCCESS,
    USER_UPDATED_FAIL,
    USER_FORGOT_pass_REQUEST,
    USER_FORGOT_pass_SUCCESS,
    USER_FORGOT_pass_FAIL,
    USER_RESET_REQUEST,
    USER_RESET_SUCCESS,
    USER_RESET_FAIL,
    USERS_LIST_ADMIN_REQUEST,
    USERS_LIST_ADMIN_SUCCESS,
    USERS_LIST_ADMIN_FAIL,
    REMOVE_USER_ADMIN_REQUEST,
    REMOVE_USER_ADMIN_SUCCESS,
    REMOVE_USER_ADMIN_FAIL,
    UPDATE_USER_ROLE_ADMIN_REQUEST,
    UPDATE_USER_ROLE_ADMIN_SUCCESS,
    UPDATE_USER_ROLE_ADMIN_FAIL
} from '../constants/userConstant';
import axios from 'axios';



export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json", 'access-control-allow-credentials': true }, withCredentials: true };

        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/login`, { email, password }, config);
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
    }
};

export const userRegistration = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });
        const config = { Headers: { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/user`, userData, config);
        dispatch({ type: REGISTER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.data.message })
    }
};


export const userDetails = () => async (dispatch) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/me`, config);
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });

    } catch (error) {
        dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message })
    }
};

export const updatedPassword = (userPass) => async (dispatch) => {
    try {
        dispatch({ type: USER_UPDATE_pass_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/password/update`, userPass, config);
        dispatch({ type: USER_UPDATE_pass_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_UPDATE_pass_FAIL, payload: error.response.data.message })

    }
};
export const forgotPasswordAction = (email) => async (dispatch) => {
    try {
        dispatch({ type: USER_FORGOT_pass_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/password/forgot`, email, config);
        dispatch({ type: USER_FORGOT_pass_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_FORGOT_pass_FAIL, payload: error.response.data.message })

    }
};
export const resetPasswordToken = (token, passData) => async (dispatch) => {
    try {
        dispatch({ type: USER_RESET_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/password/reset/${token}`, passData, config);
        dispatch({ type: USER_RESET_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_RESET_FAIL, payload: error.response.data.message })

    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGOUT_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/logout`, config);
        dispatch({ type: USER_LOGOUT_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: USER_LOGOUT_FAIL, payload: error.response.data.message })
    }
};


export const updatedProfile = (userUpdatedData) => async (dispatch) => {
    try {
        dispatch({ type: USER_UPDATED_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/me/update`, userUpdatedData, config);
        dispatch({ type: USER_UPDATED_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_UPDATED_FAIL, payload: error.response.data.message })

    }
};


//get users list
export const getUsersListAdmin = () => async (dispatch) => {
    try {
        dispatch({ type: USERS_LIST_ADMIN_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/users`, config);
        dispatch({ type: USERS_LIST_ADMIN_SUCCESS, payload: data.usersList })
    } catch (error) {
        dispatch({ type: USERS_LIST_ADMIN_FAIL, payload: error.response.data.message })

    }
};


//remove user action for admin
export const removeUserAdminAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_USER_ADMIN_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/user/${id}`, config);
        dispatch({
            type: REMOVE_USER_ADMIN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REMOVE_USER_ADMIN_FAIL,
            payload: error.response.data.message
        })
    }
};

export const updateUserRoleAdminAction = (id, dataRole) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_ROLE_ADMIN_REQUEST });
        const config = { Headers: { "Content-Type": "application/json", 'Access-Control-Allow-Credentials': true }, withCredentials: true };
        const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/user/${id}`, dataRole, config);
        dispatch({ type: UPDATE_USER_ROLE_ADMIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_USER_ROLE_ADMIN_FAIL, payload: error.response.data.message })

    }
};