import axios from 'axios';

class emailService {
  getUsers(fname, lname, email, phoneNumber, message, selectSubject)  {
    console.log(selectSubject);
    return axios.post('http://localhost:8080/ContactUs', {fname, lname, email, phoneNumber, message, selectSubject })
  }
};

export default new emailService();
