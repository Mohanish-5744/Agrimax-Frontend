import axios from "axios";

class CropService{
    getUsers(name)
    {
        return axios.get("http://localhost:8080/cropDetail/"+name)
    }
}

export default new CropService();