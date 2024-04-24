import axios from "axios";

const User_Rest_Api_Url = 'http://localhost:8080/News';

class NewsService{
    getUsers()
    {
        return axios.get(User_Rest_Api_Url)
    }
}

export default new NewsService();
