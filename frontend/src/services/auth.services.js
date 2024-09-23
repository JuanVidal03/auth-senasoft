import axios from "./axios.js";

export const verifyToken = async() => {
    try {
        
        const response = await axios.get("/verify-token");
        return response;

    } catch (error) {
        return error.message;
    }
}
