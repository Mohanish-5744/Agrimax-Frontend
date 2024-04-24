import axios from "axios";

class UpdateService{
    UpdateUsers(id,name, mail, password)
    {
        return axios.post('http://localhost:8080/students/'+id, {name, mail, password })
    }
}

export default new UpdateService();