import axios from "axios";

const User_Rest_Api_Url = 'http://localhost:8080/students/';

class deleteService{
    getUsers(value)
    {
        return axios.delete(User_Rest_Api_Url+value)
    }
}

export default new deleteService();