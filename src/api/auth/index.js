/* eslint-disable prettier/prettier */
import axios from 'axios';

// Login User
export const loginUser = (values) => {
    const url = 'api/users/login';

    return axios.post(url, values)
        .then(response => response.data)
        .catch(error => {
            // Handle the error (e.g., log it or show a user-friendly message)
            console.error('Error in loginUser:', error);
            throw error; // Re-throw the error to propagate it further
        });

};


// Register User
export const registerUser = (values) => {
    const url = 'api/users';

    return axios.post(url, values)
        .then(response => response.data);
};




