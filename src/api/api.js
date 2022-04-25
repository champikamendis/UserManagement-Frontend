import axios from "axios";

export const addUser = async newUser => {
    let headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
    }
    
    try {
        const res = await axios.post(`http://localhost:4000/users/register`, newUser, headers)
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
    } 
}

export const editUser = async (id, editedUser) => {
    let headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
    }
    
    try {
        const res = await axios.put(`http://localhost:4000/users/${id}`, editedUser, headers)
        console.log(res);
        return res; 
    } catch (error) {
        console.error(error);
    }
    
}

export const deleteUser = async id => {
    let headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
    }
    
    try {
        const res = await axios.delete(`http://localhost:4000/users/${id}`, headers)
        console.log(res);
        return res;  
    } catch (error) {
        console.error(error);
    }
}

export const getAllUsers = async() => {
    let headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
    }

    try {
        const res = await axios.get(`http://localhost:4000/users`, headers)
        console.log(res);
        return res.data;
    } catch (error) {
       console.error(error); 
    }   
}

export const getAllDepartments = async() => {
    let headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
    }

    try {
        const res = await axios.get(`http://localhost:4000/departments`, headers)
        console.log(res);
        return res.data;   
    } catch (error) {
       console.error(error); 
    } 
}