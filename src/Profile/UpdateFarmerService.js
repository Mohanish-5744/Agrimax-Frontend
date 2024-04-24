import axios from "axios";

class UpdateFarmerService {
    UpdateUsers(
        id,
        fname,
        lname,
        address,
        crop1,
        crop2,
        crop3,
        email,
        adharno,
        areacoordinates,
        areainacars,
        category,
        contact,
    ) {
        return axios.put('http://localhost:8080/Farmer/' + id, {
            id,
            fname,
            lname,
            email,
            adharno,
            crop1,
            crop2,
            crop3,
            address,
            category,
            areainacars,
            areacoordinates,
            contact
        })
    }
}

export default new UpdateFarmerService();