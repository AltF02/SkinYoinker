import axios from 'axios';

function getUserId(name: string) {
    return axios.get('https://api.mojang.com/users/profiles/minecraft/' + name)
        .then(response => {
            return response.data
    })
}

export default {
    getUserId
}
