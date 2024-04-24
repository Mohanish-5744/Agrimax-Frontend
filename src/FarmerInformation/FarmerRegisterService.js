import axios from "axios";

class FarmerRegisterService {
  InsertFarmer(
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
    contact
  ) {
    console.log(contact)
    return axios.post("http://localhost:8080/Farmer", {
      id: parseInt(id),
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
    });
  }
}

export default new FarmerRegisterService();
