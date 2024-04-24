import axios from "axios";

const User_Rest_Api_Url = 'http://localhost:8080/Farmer/';

class PhomeService{
    getUsers(value)
    {
        return axios.get(User_Rest_Api_Url+value)
    }
}

export default new PhomeService();