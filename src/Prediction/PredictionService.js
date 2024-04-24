import axios from "axios";

class PredictionService{
    getUsers(
        Crop1, 
        Crop2, 
        Crop3,
        Area1,
        Area2,
        Area3,
        Location)
    {
        console.log(Crop1,Crop2,Crop3,Area1,Area2,Area3,Location);
        return axios.post('http://localhost:8080/MlModel',
        {Crop1, 
        Crop2, 
        Crop3,
        Area1,
        Area2,
        Area3,
        Location}
        )
    }
}

export default new PredictionService();