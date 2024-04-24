import axios from "axios";

const User_Rest_Api_Url = 'http://localhost:8080/Farmer/';

class DeleteServiceFarmer{
    getUsers(id)
    {
        return axios.delete(User_Rest_Api_Url+id)
    }
}

export default new DeleteServiceFarmer();
