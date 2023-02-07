import axios from "axios";

export function getRandomUser() {
    return axios.get(process.env.NEXT_PUBLIC_API_URL + "/randomUser", {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
            "Content-Type": "application/json",
        }
    }).then(res => res.data)
        .catch(err => console.log(err));
}