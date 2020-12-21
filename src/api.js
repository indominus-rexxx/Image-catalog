import axios from 'axios';

export const getImage = (tag) => {
    return axios.get(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`).then(
        response => {
            console.log(response.status, response)
            return response.data.data
        }
    )
};