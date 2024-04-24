import axios from "axios";

const User_Rest_Api_Url = 'http://localhost:8080/News/';

class DeleteNewsServices{
    getUsers(id)
    {
        return axios.delete(User_Rest_Api_Url+id)
    }
}

export default new DeleteNewsServices();
