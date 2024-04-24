import axios from "axios";

class LoginService{
    getUsers(email, password)
    {
        return axios.post('http://localhost:8080/Employee/check', {email, password })
    }
}

export default new LoginService();