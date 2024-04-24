import axios from "axios";

class AddNewsServices {
    InsertNews(
        id,
        heading,
        date,
        publisherName,
        discription
    ) {
        console.log(heading)
        return axios.post("http://localhost:8080/News", {
            id: parseInt(id),
            heading,
            date,
            publisherName,
            discription
        });
    }
}

export default new AddNewsServices();
