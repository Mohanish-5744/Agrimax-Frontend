import axios from "axios";

class SignUpService{
    getUsers(name,adharno, email, password)
    {
        return axios.post('http://localhost:8080/Employee', {name,adharno, email, password })
    }
}

export default new SignUpService();