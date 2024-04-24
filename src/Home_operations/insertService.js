import axios from "axios";

class insertService{
    getUsers(name, mail, password)
    {
        return axios.post('http://localhost:8080/students', {name, mail, password })
    }
}

export default new insertService();