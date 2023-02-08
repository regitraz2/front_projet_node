import axios from "axios";
import {IUser} from "@/interfaces/IUser";

export function getRandomUser() {
    return axios.get(process.env.NEXT_PUBLIC_API_URL + "/randomUser", {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
            "Content-Type": "application/json",
        }
    }).then(res => res.data)
        .catch(err => console.log(err));
}

export function addUser(user: IUser) {
    axios.post(
        process.env.NEXT_PUBLIC_API_URL + '/users',
        user,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
                "Content-Type": "application/json",
            }
        }
    )
        .then((res) => res.data)
        .catch((err) => {
            console.log('err : ', err)
        })
}